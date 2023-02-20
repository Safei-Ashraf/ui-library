import { AccordionProps } from "./Accordion.d";
export const Accordion = ({ items, ...props }: AccordionProps) => {
	const renderedItems = items.map(({ id, heading, content }) => (
		<li key={id}>
			<div>{heading}</div>
			<div>{content}</div>
		</li>
	));
	return <ul {...props}>{renderedItems}</ul>;
};
