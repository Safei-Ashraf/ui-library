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
		"secondary-filled": variant === "filled" && color === "secondary",
		"neutral-filled": variant === "filled" && color === "neutral",
		"disabled-filled": isDisabled && variant === "filled",
		"primary-outline": variant === "outline" && color === "primary",
		"secondary-outline": variant === "outline" && color === "secondary",
		"neutral-outline": variant === "outline" && color === "neutral",
		"disabled-outline": isDisabled && variant === "outline",
		"primary-text": variant === "text" && color === "primary",
		"secondary-text": variant === "text" && color === "secondary",
		"neutral-text": variant === "text" && color === "neutral",
		lg: size === "lg",
		md: size === "md",
		sm: size === "sm",
		reverse: iconDirection === "right",
		extraClasses: extraClasses,
	});

	const iconColor = className({
		"#ffffff": variant === "filled" && !isDisabled,
		"#3e413f80": variant === "filled" && isDisabled,
		"#00AB0E": variant === "outline" && !isDisabled && color === "primary",
		"#0093AD":
			variant === "outline" && !isDisabled && color === "secondary",
		"#1A1B1A": variant === "outline" && !isDisabled && color === "neutral",
		"#3e413f": variant === "outline" && isDisabled,
	});
	return (
		<button
			onClick={onClick}
			className={buttonClasses}
			disabled={isDisabled}
			{...props}
		>
			{icon && (
				<div>
					<StarIcon
						size={size}
						color={iconColor}
						iconDirection={iconDirection}
					/>
				</div>
			)}
			{text && <div>{text}</div>}
			{children}
		</button>
	);
};
