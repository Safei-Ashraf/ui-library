import { ReactNode } from "react";
import className from "classnames";
import "./Button.css";
import StarIcon from "../StarIcon";

interface ButtonProps {
	variant?: "filled" | "outline" | "text";
	color?: "primary" | "secondary" | "neutral";
	size?: "lg" | "md" | "sm";
	text?: string;
	extraClasses?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon?: boolean;
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
	const buttonClasses = className("btn", {
		"primary-filled": variant === "filled" && color === "primary",
		lg: size === "lg",
		md: size === "md",
		sm: size === "sm",
		"flex-row": iconDirection === "right",
		"flex-row-reverse": iconDirection === "left",
		"disabled-filled": isDisabled,
		extraClasses: extraClasses,
	});
	const iconClasses = className("icon", {
		"mr-md":
			(size === "lg" && iconDirection === "right") ||
			(size === "md" && iconDirection === "right"),
		"mr-sm": size === "sm" && iconDirection === "right",
		"ml-md":
			(size === "lg" && iconDirection === "left") ||
			(size === "md" && iconDirection === "left"),
		"ml-sm": size === "sm" && iconDirection === "left",
	});
	return (
		<button
			onClick={onClick}
			{...props}
			className={buttonClasses}
			disabled={isDisabled}
		>
			{icon && (
				<div className={iconClasses}>
					<StarIcon size={size} />
				</div>
			)}
			{text && <div>{text}</div>}
			{children}
		</button>
	);
};
