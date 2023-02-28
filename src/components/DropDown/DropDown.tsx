import { DropDownProps } from "./DropDown.d";
import "./DropDown.css";

export const DropDown = ({
	placeholder = "Select...",
	items,
	...props
}: DropDownProps): JSX.Element => {
	return <div {...props}>{placeholder}</div>;
};
