const { render, screen } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./BookingTable.stories");

const renderEditor = () => {
	const utils = render(
		<MemoryRouter>
			<Standard />
		</MemoryRouter>,
	);

	return {
		...utils,
	};
};

it("should have a title", () => {
	// Arrange
	renderEditor();

	// Act
	const text = "Reserve a Table";
	const title = screen.getByText(text);

	// Assert
	expect(title).toBeInTheDocument();
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
