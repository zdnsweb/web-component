import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import * as echarts from 'echarts';

export class ChartBase extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      width: inherit;
      height: inherit;
    }
    #container {
      display: flex;
      flex: 1 1 auto;
    }
  `;

  get chartContainer() {
    return this.renderRoot.querySelector('#container') as HTMLDivElement;
  }

  chart: echarts.ECharts | null;
  resizeObserver: ResizeObserver | null;

  @property({ type: String, attribute: true })
  renderer: string = 'svg';

  override connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.unobserve(this.parentElement);
    this.chart?.dispose();
  }

  override firstUpdated() {
    this.chart = echarts.init(this.chartContainer, {}, { renderer: this.renderer });
    this.resizeObserver = new ResizeObserver((_entries) => {
      this.chart.resize();
    });
    this.resizeObserver.observe(this.parentElement);
  }

  override render() {
    return html` <div id="container"></div> `;
  }

  override updated(_p) {
    super.updated(_p);

    this.updateChart();
  }

  updateChart() {
    this.chart.setOption(this.options);
  }

  get options() {
    const data = JSON.parse(this.innerHTML);
    return data;
  }
}
