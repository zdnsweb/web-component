import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './chart';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: '@zdns/web-component/charts/chart',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
} as Meta;

export interface ElementProps {
  width: string;
  height: string;
  data: object;
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ElementProps> = ({ width, height, data }) =>
  html`<div style="width: ${width}; height: ${height};">
    <g-chart>${JSON.stringify(data)}</g-chart>
  </div>`;

export const Top = Template.bind({});

Top.args = {
  width: '640px',
  height: '480px',
  data: {
    tooltip: {
      show: true,
    },
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    },
    xAxis: [
      {
        min: 0,
        scale: true,
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'category',
        show: false,
        data: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06'],
      },
    ],
    series: [
      {
        type: 'bar',
        data: [2123, 3354, 4012, 2175, 5800, 2630],
      },
    ],
  },
};

export const Pie = Template.bind({});

Pie.args = {
  width: '640px',
  height: '480px',
  data: {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%',
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: [],
    },
    series: [
      {
        type: 'pie',
        radius: '65%',
        sort: 'ascending',
        center: ['50%', '55%'],
        selectedMode: 'single',
        data: [{ name: 'NODATA', value: 1 }],
        itemStyle: { normal: { labelLine: { length: 30 } } },
      },
    ],
  },
};
