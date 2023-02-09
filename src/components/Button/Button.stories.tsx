import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

//default export that describes the component,
export default {
	title: "UI-Library/Button",
	component: Button,
	argTypes: {
		variant: {
			control: "inline-radio",
			options: ["filled", "outline", "text"],
		},
		size: {
			control: "inline-radio",
			options: ["lg", "md", "sm"],
		},
		color: {
			control: "inline-radio",
			options: ["primary", "secondary", "neutral"],
		},
		iconDirection: { control: "inline-radio", options: ["left", "right"] },
		isDisabled: { control: "boolean", type: "boolean" },
		children: { control: "text", type: "string" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// named exports that describe the stories.
export const ButtonMain = Template.bind({});
