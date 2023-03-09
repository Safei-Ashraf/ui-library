import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDown from './index';
import dummyData from './dummyData';

export default {
  title: 'UI-Library/DropDown',
  component: DropDown,
  argTypes: {
    label: { control: 'text', type: 'string' },
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = args => (
  <DropDown {...args} />
);
export const AccordionMain = Template.bind({});
AccordionMain.args = {
  id: 'dd1',
  label: 'Drop Down',
  options: dummyData,
};
