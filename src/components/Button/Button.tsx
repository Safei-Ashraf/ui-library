import { ReactNode } from "react";
// import className from "classnames";
import "./Button.css";

interface ButtonProps {
	primary?: boolean;
	secondary?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	rounded?: boolean;
	outline?: boolean;
	className?: string;
	children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
	// const classes = className({
	// 	btn: props.primary,
	// });
	return (
		<button {...props} className="bg-primary text-secondary btn">
			{children}
		</button>
	);
};
