import React, { ReactNode } from "react";
import "./Button.css";
export enum buttonVariants {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	SUCCESS = "success",
	WARNING = "warning",
	DANGER = "danger",
}

interface ButtonProps {
	primary?: boolean;
	secondary?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	rounded?: boolean;
	outline?: boolean;
	children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
	return <button {...props}>{children}</button>;
};
