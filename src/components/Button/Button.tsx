import className from "classnames";
import StarIcon from "../StarIcon";
import { ButtonProps } from "./Button.d";
import "./Button.css";

export const Button = ({
	variant = "filled",
	size = "md",
	color = "primary",
	extraClasses,
	onClick,
	children,
	iconDirection = "right",
	iconOnly = false,
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
		"disabled-text": isDisabled && variant === "text",
		lg: size === "lg",
		md: size === "md",
		sm: size === "sm",
		reverse: iconDirection === "right" && icon === true,
		extraClasses: extraClasses,
	});

	return (
		<button
			onClick={onClick}
			className={buttonClasses}
			disabled={isDisabled}
			{...props}
		>
			{icon && (
				<div className="icon-container">
					<StarIcon
						size={size}
						iconDirection={iconDirection}
						iconOnly={iconOnly}
					/>
				</div>
			)}
			{text && !iconOnly && <div>{text}</div>}
			{children}
		</button>
	);
};
