import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Accordion from "./index";

//Snapshot
describe("renders correctly", () => {
	const items = [
		{
			id: "1",
			heading: "1st Heading here",
			content: "1st content here 1st content here",
		},
		{
			id: "2",
			heading: "2nd Heading here",
			content: "2nd content here 2nd content here",
		},
		{
			id: "3",
			heading: "3rd Heading here",
			content: "3rd content here 3rd content here",
		},
	];
	const tree = renderer.create(<Accordion items={items} />).toJSON();
	expect(tree).toMatchSnapshot();
});

//Unit
describe("Accordion", () => {
	const items = [
		{ id: "1", heading: "1st Heading here", content: "1st content here" },
		{ id: "2", heading: "2nd Heading here", content: "2nd content here" },
		{ id: "3", heading: "3rd Heading here", content: "3rd content here" },
	];
	it("render Accordion", () => {
		render(<Accordion items={items} />);

		expect(screen.getByText("Accordion")).toBeInTheDocument();
	});
});
