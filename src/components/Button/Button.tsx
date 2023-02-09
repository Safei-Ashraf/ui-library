import { ReactNode } from "react";
import className from "classnames";
import "./Button.css";

// type IconProps = {
// 	size?: "lg" | "md" | "sm";
// 	color: string;
// };
interface ButtonProps {
	variant?: "filled" | "ghost" | "text";
	color?: "primary" | "secondary" | "neutral";
	size?: "lg" | "md" | "sm";
	extraClasses?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	// renderIcon?: () => ReactElement<IconProps>;
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
	// const icon = renderIcon();
	return (
		<button
			onClick={onClick}
			{...props}
			className={classes}
			disabled={isDisabled}
		>
			{/* {icon} */}
			{children}
		</button>
	);
};
