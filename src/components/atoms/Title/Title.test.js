const { render, screen } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./Title.stories");

it("should shows title", async () => {
	// Arrange
	render(<Standard />);

	// Act
	const title = screen.getByText("Little Lemon");

	// Assert
	expect(title).toHaveTextContent("Little Lemon");
});

it("should shows subtitle", async () => {
	// Arrange
	render(<Standard />);

	// Act
	const title = screen.getByText("Chicago");

	// Assert
	expect(title).toHaveTextContent("Chicago");
});

it("should be acessible", async () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
