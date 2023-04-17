const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./Specials.stories");

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
	const { container } = renderEditor();

	// Act
	const title = container.querySelector(".title");

	// Assert
	expect(title).toBeInTheDocument();
});

it("should shows a CTA button", () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const ctaButton = container.querySelector(".ctaButton");

	// Assert
	expect(ctaButton).toBeInTheDocument();
});

it("should shows 3 SpecialsCard", () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const specialCards = container.querySelectorAll(".specialsCard");

	// Assert
	expect(specialCards.length).toBe(3);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();
	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
