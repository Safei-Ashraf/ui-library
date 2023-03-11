import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'UI-Library/Badge',
  component: Badge,
  //argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const BadgeMain = Template.bind({});
BadgeMain.args = {
  size: 24,
  name: 'star',
  color: 'red',
};
