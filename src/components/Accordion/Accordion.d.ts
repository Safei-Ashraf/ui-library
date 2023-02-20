import { ReactNode } from "react";

interface AccordionItem {
	heading: string;
	content: string;
	id: string;
}

export interface AccordionProps {
	items: AccordionItem[];
	children?: ReactNode;
}
