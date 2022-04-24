import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './line';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: '@zdns/web-component/charts/line',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
} as Meta;

export interface ElementProps {
  width: string;
  height: string;
  loading: boolean;
  animation: boolean;
  smooth: boolean;
  name: string;
  axis: [];
  data: [];
  serieStyle: object;
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ElementProps> = ({
  width,
  height,
  loading,
  animation,
  smooth,
  name,
  axis,
  data,
  serieStyle,
}) =>
  html`<div style="width: ${width}; height: ${height};">
    <line-chart
      ?loading=${loading}
      ?animation=${animation}
      ?smooth=${smooth}
      name=${name}
      axis=${JSON.stringify(axis)}
      data=${JSON.stringify(data)}
      serie-style=${JSON.stringify(serieStyle)}
    ></line-chart>
  </div>`;

export const Basic = Template.bind({});

Basic.args = {
  width: '640px',
  height: '480px',
  loading: true,
  animation: true,
  smooth: false,
  name: 'line',
  axis: [],
  data: [],
};

export const WithData = Template.bind({});

WithData.args = {
  width: '640px',
  height: '480px',
  animation: true,
  smooth: true,
  name: 'line',
  axis: ['2017', '2018', '2019', '2020', '2021', '2022'],
  data: [37, 42, 58, 61, 27, 24],
};

export const WithSerieStyle = Template.bind({});

WithSerieStyle.args = {
  width: '640px',
  height: '480px',
  animation: false,
  smooth: true,
  name: 'line',
  axis: ['2017', '2018', '2019', '2020', '2021', '2022'],
  data: [37, 42, 58, 61, 27, 24],
  serieStyle: { normal: { areaStyle: { type: 'default' } } },
};
