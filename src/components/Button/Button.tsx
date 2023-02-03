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
	variant?: buttonVariants;
	rounded?: boolean;
	outline?: boolean;
	children?: ReactNode;
}

export const Button = ({
	variant,
	rounded,
	outline,
	children,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={`${
				variant === "primary" ? "primary " : "secondary"
			} btn`}
		>
			{children}
		</button>
	);
};
