import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Button", () => {
	it("render button", () => {
		render(<Button />);
	});
	it("render button with custom text content", () => {
		const text = "Hello Button";
		render(<Button text={text} />);

		expect(screen.getByText(text)).toBeInTheDocument();
	});
	it("render disabled button", () => {
		render(<Button isDisabled />);

		expect(screen.getByRole("button")).toBeDisabled();
	});
	it("does not render icon by default", () => {
		render(<Button />);
		expect(screen.queryByRole("icon")).toBeNull();
	});
	it("renders icon when prop provided", () => {
		render(<Button icon />);
		expect(screen.getByRole("icon")).toBeInTheDocument();
	});
	it("renders large size button with primary color and variant filled", () => {
		render(<Button size="lg" variant="filled" color="primary" />);
		expect(screen.getByRole("button")).toHaveClass("primary-filled", "lg");
	});
	it("renders md size button with neutral color and variant outline", () => {
		render(<Button size="md" variant="outline" color="neutral" />);
		expect(screen.getByRole("button")).toHaveClass("neutral-outline", "md");
	});
	it("renders sm size button with secondary color and variant text", () => {
		render(<Button size="sm" variant="text" color="secondary" />);
		expect(screen.getByRole("button")).toHaveClass("secondary-text", "sm");
	});
	it("check onClick function is called when user click", () => {
		const handleclick = jest.fn();
		render(<Button onClick={handleclick} />);
		userEvent.click(screen.getByRole("button"));
		expect(handleclick).toBeCalledTimes(1);
	});
});

describe("renders correctly", () => {
	const tree = renderer.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});
