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
    name: string;
    axis: [];
    data: [];
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ElementProps> = ({ name, axis, data }) => 
  html`<div style="width: 640px; height: 480px;">
        <line-chart name=${name} axis=${JSON.stringify(axis)} data=${JSON.stringify(data)}></line-chart>
  </div>`;

export const Basic = Template.bind({});

Basic.args = {
    name: 'line',
    axis: [],
    data: [],
};
