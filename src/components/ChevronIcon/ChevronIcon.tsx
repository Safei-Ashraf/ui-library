import { ChevronIconProps } from "./ChevronIcon.d";
import className from "classnames";

export const ChevronIcon = ({
	direction = "down",
	size = "lg",
	style,
	classes,
	...props
}: ChevronIconProps): JSX.Element => {
	const baseIconSizes = className({
		"20": size === "lg",
		"16.67": size === "md",
		"15": size === "sm",
	});
	const iconDirection = className({
		"rotate-0": direction === "down",
		"rotate-180": direction === "up",
		"rotate-90": direction === "left",
		"rotate-270": direction === "right",
	});
	return (
		<>
			<svg
				role={"icon"}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 455 455"
				fill="currentColor"
				width={baseIconSizes}
				height={baseIconSizes}
				className={`${iconDirection} ${
					classes !== undefined ? classes : ""
				}`}
				style={style}
				{...props}
			>
				<path
					d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M227.5,
                    327.148L99.411,199.476l21.178-21.248L227.5,284.791l106.911-106.563l21.178,21.248L227.5,327.148z"
				/>
			</svg>
		</>
	);
};
