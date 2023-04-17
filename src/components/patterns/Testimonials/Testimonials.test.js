const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./Testimonials.stories");

it("should have a title", () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const title = container.querySelector(".title");

	// Assert
	expect(title).toBeInTheDocument();
});

it("should be accessible", async () => {
	// Arrange
	const { container } = render(<Standard />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
