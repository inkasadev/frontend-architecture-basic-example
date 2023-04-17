const { render, screen, act } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./Navbar.stories");

const renderEditor = () => {
	const utils = render(
		<MemoryRouter history="/">
			<Standard />
		</MemoryRouter>,
	);

	return {
		...utils,
	};
};

it("should have a logo", () => {
	// Arrange
	renderEditor();

	// Act
	const logo = screen.getByRole("img");

	// Assert
	expect(logo).toHaveAttribute("src", "logo.svg");
});

it("should have a hamburguer button", () => {
	// Arrange
	renderEditor();

	// Act
	const button = screen.getByRole("button");
	act(() => {
		button.click();
	});

	// Assert
	expect(button).not.toBeNull();
});

it("should have a menu", () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const menu = container.querySelector(".links");

	// Assert
	expect(menu).not.toBeNull();
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
