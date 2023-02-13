import className from "classnames";

import { IconProps } from "./Icon";

import "./StarIcon.css";

export const StarIcon = ({
	size = "md",
	iconDirection = "left",
	classes,
	iconOnly,
	...props
}: IconProps): JSX.Element => {
	const baseIconSizes = className({
		"22": size === "lg",
		"18.34": size === "md",
		"16.5": size === "sm",
	});
	const iconContainerClasses = className("icon", {
		right:
			(iconDirection === "right" && !iconOnly) ||
			(iconDirection === "right" && !iconOnly),
		left:
			(iconDirection === "left" && !iconOnly) ||
			(iconDirection === "left" && !iconOnly),
	});
	return (
		<svg
			role={"icon"}
			fill="currentColor"
			viewBox="0 0 22 22"
			xmlns="http://www.w3.org/2000/svg"
			width={baseIconSizes}
			height={baseIconSizes}
			className={`${iconContainerClasses} ${
				classes !== undefined ? classes : ""
			}`}
			{...props}
		>
			<path d="M21.947 9.179C21.818 8.801 21.477 8.534 21.079 8.503L15.378 8.05L12.911 2.589C12.75 2.23 12.393 2 12 2C11.607 2 11.25 2.23 11.089 2.588L8.62198 8.05L2.92098 8.503C2.52998 8.534 2.19298 8.791 2.05998 9.16C1.92698 9.529 2.02098 9.942 2.30198 10.216L6.51498 14.323L5.02498 20.775C4.93298 21.174 5.09398 21.589 5.43098 21.822C5.60298 21.94 5.80098 22 5.99998 22C6.19298 22 6.38698 21.944 6.55498 21.832L12 18.202L17.445 21.832C17.793 22.064 18.25 22.055 18.59 21.808C18.928 21.561 19.077 21.128 18.962 20.726L17.133 14.326L21.669 10.244C21.966 9.976 22.075 9.558 21.947 9.179Z" />
		</svg>
	);
};
