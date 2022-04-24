/** eslint-disable */
/** not finished */
import { customElement, property } from 'lit/decorators.js';
import * as echarts from 'echarts';

import { ChartBase } from './base';

@customElement('g-chart')
export class Chart extends ChartBase {
  observer: MutationObserver | null;

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  override firstUpdated() {
    super.firstUpdated();
    this.observer = new MutationObserver(() => {
      this.updateChart();
    });
    this.observer.observe(this, { subtree: true, childList: true, attributes: true });
  }

  override get options() {
    console.log(this.textContent);
    const data = JSON.parse(this.textContent);
    return data;
  }
}
