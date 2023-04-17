const { render, screen } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { Standard } = require("./Testimonial.stories");

const data = {
	rating: "3",
	name: "Marcos Santos",
	description: "The food is amazing and the atmosphere is incredible.",
};

it("should shows the client info", () => {
	// Arrange
	render(<Standard {...data} />);

	// Act
	const name = screen.getByText(data.name);
	const description = screen.getByText(`"${data.description}"`);

	// Assert
	expect(name).toHaveTextContent(data.name);
	expect(description).toHaveTextContent(`"${data.description}"`);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = render(<Standard {...data} />);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
