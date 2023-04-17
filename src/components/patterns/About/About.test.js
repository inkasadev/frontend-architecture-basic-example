const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./About.stories");

it("should have a title", () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const title = container.querySelector(".title");

	// Assert
	expect(title).toBeInTheDocument();
});

it("should have a description", () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const description = container.querySelector(".description");

	// Assert
	expect(description).toBeInTheDocument();
});

it("should be accessible", async () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
