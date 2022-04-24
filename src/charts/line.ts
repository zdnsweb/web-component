import { customElement, property } from 'lit/decorators.js';
import * as echarts from 'echarts';
import { ChartBase } from './base';

@customElement('line-chart')
export class LineChart extends ChartBase {
  @property({ type: String, attribute: true })
  name: string = '';

  @property({ type: Object, attribute: true, reflect: true })
  axis = [];
  @property({ type: Object, attribute: true, reflect: true })
  data = [];
  @property({ type: Object, attribute: 'serie-style', reflect: true })
  serieStyle = {};

  @property({ type: Boolean, attribute: true, reflect: true })
  smooth: boolean = false;
  @property({ type: Boolean, attribute: true, reflect: true })
  animation: boolean = false;

  override attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null,
  ): void {
    super.attributeChangedCallback(name, _old, value);
    if (name === 'name') {
      this.name = value ?? '';
      this.requestUpdate(name, _old);
    }
    if (name === 'axis') {
      this.axis = JSON.parse(value ?? '[]');
      this.requestUpdate(name, _old);
    }
    if (name === 'data') {
      this.data = JSON.parse(value ?? '[]');
      this.requestUpdate(name, _old);
    }
    if (name === 'serie-style') {
      try {
        this.serieStyle = JSON.parse(value ?? '{}');
        this.requestUpdate(name, _old);
      } catch (e) {
        console.error(e);
      }
    }
    if (name === 'smooth') {
      this.smooth = value != null;
      this.requestUpdate(name, _old);
    }
    if (name === 'animation') {
      this.animation = value != null;
      this.requestUpdate(name, _old);
    }
  }

  override get options() {
    const s = this.axis;
    const d = this.data;
    const options: echarts.EChartOption = {
      animation: this.animation,
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a} : {c}',
      },
      toolbox: {
        show: false,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: s,
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: this.name,
          type: 'line',
          smooth: this.smooth,
          itemStyle: this.serieStyle,
          data: d,
        },
      ],
    };
    return options;
  }
}
