import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Accordion from "./index";

//Snapshot
describe("renders correctly", () => {
	const tree = renderer.create(<Accordion />).toJSON();
	expect(tree).toMatchSnapshot();
});

//Unit
describe("Accordion", () => {
	it("render Accordion", () => {
		render(<Accordion />);

		expect(screen.getByText("Accordion")).toBeInTheDocument();
	});
});
