import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './zdns-logo';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: '@zdns/web-component/zdns-logo',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
} as Meta;

export interface ElementProps {
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ElementProps> = ({}) => html`<zdns-logo></zdns-logo>`;

export const Basic = Template.bind({});

