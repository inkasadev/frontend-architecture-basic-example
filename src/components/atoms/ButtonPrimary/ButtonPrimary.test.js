import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Standard } from "./ButtonPrimary.stories";
import { MemoryRouter } from "react-router-dom";

const renderEditor = () => {
	const text = "Reserve a Table";
	const url = "https://www.google.com";
	const utils = render(
		<MemoryRouter>
			<Standard text={text} to={url} />
		</MemoryRouter>,
	);

	return {
		...utils,
		text,
		url,
	};
};

it("should have a href", () => {
	// Arrange
	const { text, url } = renderEditor();

	// Act
	const field = screen.getByText(text);

	// Assert
	expect(field).toHaveAttribute("href", url);
});

it("should render a text", () => {
	// Arrange
	const { text } = renderEditor();

	// Act
	const field = screen.getByText(text);

	// Assert
	expect(field).toHaveTextContent(text);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
