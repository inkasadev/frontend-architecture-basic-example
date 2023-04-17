const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./Icon.stories");

it("should have fa-lemon className", async () => {
	// Arrange
	const { container } = render(<Standard name="fa-lemon" />);

	// Act
	const icon = container.querySelector(".fa-lemon");

	// Assert
	expect(icon.classList.contains("fa-lemon")).toBe(true);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = render(<Standard name="fa-lemon" />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
