import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./index";
import dummyData from "./dummyData";

export default {
	title: "UI-Library/Accordion",
	component: DropDown,
	argTypes: {},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
	<DropDown {...args} />
);
export const AccordionMain = Template.bind({});
AccordionMain.args = {
	items: dummyData,
	placeholder: "Select..",
};
