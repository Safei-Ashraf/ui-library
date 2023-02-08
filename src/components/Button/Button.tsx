import { ReactNode } from "react";
// import className from "classnames";
import "./Button.css";

interface ButtonProps {
	variant?: "filled" | "ghost" | "text";
	size?: "large" | "medium" | "small";
	icon?: ReactNode;
	iconDirection: "right" | "left";
	className?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	color?: "primary" | "secondary" | "neutral";
}

export const Button = ({
	variant = "filled",
	size = "medium",
	icon = "",
	children,
	...props
}: ButtonProps): JSX.Element => {
	// const classes = className({
	// 	btn: props.primary,
	// });
	return (
		<button {...props} className="bg-primary text-secondary btn">
			{children}
		</button>
	);
};
