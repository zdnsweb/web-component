import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as echarts from 'echarts';
import { ChartBase } from './base';

@customElement('line-chart')
export class LineChart extends ChartBase {
  static override styles = css`
    :host {
      display: flex;
      width: inherit;
      height: inherit;
    }
    #container {
      display: flex;
      flex: 1 1 auto;
      width: 640px;
      height: inherit;
    }
  `;

  @property({ type: String, attribute: true })
  name: string = '';

  @property({ type: Object, attribute: true, reflect: true })
  axis = [];
  @property({ type: Object, attribute: true, reflect: true })
  data = [];

  override attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null,
  ): void {
    console.log(name, _old, value);
    if (name === 'name') {
      this.name = value ?? '';
      this.chart?.setOption(this.options);
      this.requestUpdate(name, _old);
    }
    if (name === 'axis') {
      this.axis = JSON.parse(value ?? '[]');
      this.chart?.setOption(this.options);
      this.requestUpdate(name, _old);
    }
    if (name === 'data') {
      this.data = JSON.parse(value ?? '[]');
      this.chart?.setOption(this.options);
      this.requestUpdate(name, _old);
    }
    console.log(this.options);
  }

  override firstUpdated() {
    this.chart = echarts.init(
      this.chartContainer,
      {},
      {
        renderer: this.renderer,
      },
    );

    this.chart.setOption(this.options);
  }

  get options() {
    const s = this.axis;
    const d = this.data;
    const options: echarts.EChartOption = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a} : {c}',
      },
      toolbox: {
        show: false,
      },
      grid: {
        x: 80,
        x2: 80,
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
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: d,
        },
      ],
    };
    console.log('options', options);
    return options;
  }
}
