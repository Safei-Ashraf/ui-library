import { ReactNode, ReactElement } from "react";
import className from "classnames";
import "./Button.css";
import { IconProps } from "../StarIcon/Icon";

// type IconProps = {
// 	size?: "lg" | "md" | "sm";
// 	color: string;
// };
interface ButtonProps {
	variant?: "filled" | "outline" | "text";
	color?: "primary" | "secondary" | "neutral";
	size?: "lg" | "md" | "sm";
	text?: string;
	extraClasses?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon?: ReactElement<IconProps>;
	iconDirection?: "right" | "left";
	isDisabled?: boolean;
}

export const Button = ({
	variant = "filled",
	size = "md",
	color = "primary",
	extraClasses,
	onClick,
	children,
	iconDirection = "right",
	isDisabled,
	text = "Click me",
	icon,
	...props
}: ButtonProps): JSX.Element => {
	const classes = className("btn", {
		"primary-filled": variant === "filled" && color === "primary",
		lg: size === "lg",
		md: size === "md",
		sm: size === "sm",
		"disabled-filled": isDisabled,
		extraClasses: extraClasses,
	});
	return (
		<button
			onClick={onClick}
			{...props}
			className={classes}
			disabled={isDisabled}
		>
			{icon}
			{text}
			{children}
		</button>
	);
};
