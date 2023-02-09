import { ReactElement, ReactNode } from "react";
// import className from "classnames";
import "./Button.css";
type IconProps = {
	size?: "lg" | "md" | "sm";
	color: string;
};
interface ButtonProps {
	variant?: "filled" | "ghost" | "text";
	size?: "lg" | "md" | "sm";
	extraClasses?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	color?: "primary" | "secondary" | "neutral";
	renderIcon: () => ReactElement<IconProps>;
	iconDirection?: "right" | "left";
}

export const Button = ({
	variant = "filled",
	size = "md",
	color = "primary",
	extraClasses,
	renderIcon,
	onClick,
	children,
	iconDirection = "right",
	...props
}: ButtonProps): JSX.Element => {
	// const classes = className({
	// 	btn: props.primary,
	// });
	const icon = renderIcon();
	return (
		<button
			onClick={onClick}
			{...props}
			className={"bg-primary text-secondary btn" + extraClasses}
		>
			{icon}
			{children}
		</button>
	);
};
