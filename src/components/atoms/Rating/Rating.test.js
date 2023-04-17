const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./Rating.stories");

it("should have to show the number of stars correctly", async () => {
	// Arrange
	const { container, rerender } = render(<Standard value={1} />);

	// Act
	let fullStars = container.querySelectorAll(".star");
	let emptyStars = container.querySelectorAll(".starEmpty");

	// Assert
	expect(fullStars.length).toBe(1);
	expect(emptyStars.length).toBe(4);

	for (let i = 2; i < 6; i++) {
		// Arrange
		rerender(<Standard value={i} />);

		// Act
		fullStars = container.querySelectorAll(".star");
		emptyStars = container.querySelectorAll(".starEmpty");

		// Assert
		expect(fullStars.length).toBe(i);
		expect(emptyStars.length).toBe(5 - i);
	}
});

it("shouldn't have less than 1 star", async () => {
	// Arrange
	const { container } = render(<Standard value={-3} />);

	// Act
	const fullStars = container.querySelectorAll(".star");
	const emptyStars = container.querySelectorAll(".starEmpty");

	// Assert
	expect(fullStars.length).toBe(1);
	expect(emptyStars.length).toBe(4);
});

it("shouldn't have more than 5 stars", async () => {
	// Arrange
	const { container } = render(<Standard value={30} />);

	// Act
	const fullStars = container.querySelectorAll(".star");
	const emptyStars = container.querySelectorAll(".starEmpty");

	// Assert
	expect(fullStars.length).toBe(5);
	expect(emptyStars.length).toBe(0);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = render(<Standard value={3} />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
