import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
	title: "UI-Library/Accordion",
	component: Accordion,
	argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion {...args} />
);

const items = [
	{
		id: "1",
		heading: "1st Heading here",
		content: "1st content here 1st content here",
	},
	{
		id: "2",
		heading: "2nd Heading here",
		content: "2nd content here 2nd content here",
	},
	{
		id: "3",
		heading: "3rd Heading here",
		content: "3rd content here 3rd content here",
	},
];
export const AccordionMain = Template.bind({});
AccordionMain.args = {
	items: items,
};
