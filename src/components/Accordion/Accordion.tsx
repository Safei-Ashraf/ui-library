import { useState } from "react";
import { AccordionProps } from "./Accordion.d";
import ChevronIcon from "./ChevronIcon";

export const Accordion = ({ items, ...props }: AccordionProps): JSX.Element => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const renderedItems = items.map(({ id, heading, content }, index) => {
		const isExapnded = index === expandedIndex;
		return (
			<li key={id}>
				<div
					onClick={() => {
						if (isExapnded === true) {
							setExpandedIndex(-1);
						} else {
							setExpandedIndex(index);
						}
					}}
				>
					{heading}
					{isExapnded && <ChevronIcon direction="down" />}
					{!isExapnded && <ChevronIcon direction="left" />}
				</div>
				{isExapnded && <div>{content}</div>}
			</li>
		);
	});
	return <ul {...props}>{renderedItems}</ul>;
};
