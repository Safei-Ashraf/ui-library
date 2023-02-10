import { ReactNode } from "react";

export interface ButtonProps {
	variant?: "filled" | "outline" | "text";
	color?: "primary" | "secondary" | "neutral";
	bgColor?: string;
	textColor?: string;
	borderColor?: string;
	size?: "lg" | "md" | "sm";
	text?: string;
	extraClasses?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon?: boolean;
	iconDirection?: "right" | "left";
	iconOnly?: boolean;
	isDisabled?: boolean;
}
