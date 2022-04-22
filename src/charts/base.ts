import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import {query} from 'lit/decorators/query.js';

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
    return this.renderRoot.querySelector('#container');
  }

  chart: echarts.EChartsType;

  @property({ type: String, attribute: true })
  renderer: string = 'svg';

  constructor() {
      super();
  }

  override connectedCallback() {
    super.connectedCallback()
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    this.chart.dispose();
  }

  override attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
      if (name === 'options') {
          const opt = JSON.parse(value || '{}');
          this.chart.setOption(opt);
      }
  }

  firstUpdated() {
        this.chart = echarts.init(this.chartContainer, {}, { renderer: this.renderer });
  }
  
  override render() {
    return html`
      <div id="container"></div>
    `;
  }

}