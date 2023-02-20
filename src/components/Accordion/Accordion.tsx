import { useState } from "react";
import { AccordionProps } from "./Accordion.d";

export const Accordion = ({ items, ...props }: AccordionProps): JSX.Element => {
	const [expandedIndex, setExpandedIndex] = useState(0);
	const handleclick = (e: React.MouseEvent<HTMLElement>): void => {
		setExpandedIndex(+e.currentTarget.id);
	};

	const renderedItems = items.map(({ id, heading, content }, index) => {
		const isExapnded = index === expandedIndex;
		return (
			<li key={id}>
				<div onClick={handleclick} id={String(index)}>
					{heading}
				</div>
				{isExapnded && <div>{content}</div>}
			</li>
		);
	});
	return <ul {...props}>{renderedItems}</ul>;
};
