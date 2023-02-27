import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Accordion } from "./Accordion";
import { items } from "./dummyData";

export default {
	title: "UI-Library/Accordion",
	component: Accordion,
	argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion {...args} />
);

export const AccordionMain = Template.bind({});
AccordionMain.args = {
	items: items,
};
