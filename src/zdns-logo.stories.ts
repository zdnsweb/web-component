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
  primaryColor?: string;
  secondaryColor?: string;
}

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ElementProps> = () => html`<zdns-logo></zdns-logo>`;

export const Basic = Template.bind({});

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const STemplate: Story<ElementProps> = ({ primaryColor, secondaryColor }) =>
  html`<zdns-logo
    primary-color="${primaryColor}"
    secondary-color="${secondaryColor}"
  ></zdns-logo>`;

export const WithColor = STemplate.bind({});

WithColor.args = {
  primaryColor: '#FF0000',
  secondaryColor: '#00FF00',
};
