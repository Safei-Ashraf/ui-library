import { useState } from "react";
import { AccordionProps } from "./Accordion.d";
import ChevronIcon from "./ChevronIcon";
import "./Accordion.css";

export const Accordion = ({ items, ...props }: AccordionProps): JSX.Element => {
	const [expandedIndex, setExpandedIndex] = useState(-1);
	const [rotateChevron, setRotateChevron] = useState(false);
	const handleRotate = () => setRotateChevron(!rotateChevron);

	const renderedItems = items.map(({ id, heading, content }, index) => {
		const isExapnded = index === expandedIndex;
		return (
			<li key={id}>
				<div
					className="accordion-heading"
					onClick={() => {
						if (isExapnded === true) {
							setExpandedIndex(-1);
						} else {
							setExpandedIndex(index);
						}
						handleRotate();
					}}
				>
					<h3 className="heading-text">{heading}</h3>
					<div className="expand-icon">
						<ChevronIcon
							direction="right"
							style={{
								transform: `${
									isExapnded
										? "rotate(0deg)"
										: "rotate(90deg)"
								}`,
								transition: "all 0.2s linear",
							}}
						/>
					</div>
				</div>
				{isExapnded && (
					<div className="accordion-content">{content}</div>
				)}
			</li>
		);
	});
	return (
		<ul {...props} className="accordion-container">
			{renderedItems}
		</ul>
	);
};
