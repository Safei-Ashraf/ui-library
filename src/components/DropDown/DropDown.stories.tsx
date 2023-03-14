import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DropDown from './index';
import { options } from './mockData';
export default {
  title: 'UI-Library/DropDown',
  component: DropDown,
  argTypes: {},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = ({
  onSelect,
  value,
  ...args
}) => {
  const [selected, setSelected] = React.useState({
    value: '',
    label: '',
    isDisabled: false,
    id: '',
  });

  return <DropDown onSelect={setSelected} value={selected} {...args} />;
};
export const DropDownMain = Template.bind({});

DropDownMain.args = {
  label: 'Drop Down',
  options: options,
};
