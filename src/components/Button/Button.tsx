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
	renderIcon: () => ReactElement<IconProps>;
	iconDirection: "right" | "left";
	className?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	color?: "primary" | "secondary" | "neutral";
}
const Icon = () => "Icon";
export const Button = ({
	variant = "filled",
	size = "md",
	children,
	renderIcon,
	...props
}: ButtonProps): JSX.Element => {
	// const classes = className({
	// 	btn: props.primary,
	// });
	const icon = renderIcon();
	return (
		<button {...props} className="bg-primary text-secondary btn">
			{icon}
			{children}
		</button>
	);
};
