const { render, screen } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./Hero.stories");

const renderEditor = (initialEntries = ["/"]) => {
	const utils = render(
		<MemoryRouter initialEntries={initialEntries}>
			<Standard />
		</MemoryRouter>,
	);

	return {
		...utils,
	};
};

it("should have title e subtitle", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const title = container.querySelector(".title");
	const subtitle = container.querySelector(".subtitle");

	// Test
	expect(title).toBeInTheDocument();
	expect(subtitle).toBeInTheDocument();
});

it("should have a description", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const description = container.querySelector(".content");

	// Test
	expect(description).toBeInTheDocument();
});

it("should have a 'Reserve a Table' button in home", async () => {
	// Arrange
	renderEditor();

	// Act
	const button = screen.queryByText("Reserve a Table");

	// Test
	expect(button).toBeInTheDocument();
});

it("shouldn't have a 'Reserve a Table' button in /boooking route", async () => {
	// Arrange
	renderEditor(["/booking"]);

	// Act
	const button = screen.queryByText("Reserve a Table");

	// Test
	expect(button).not.toBeInTheDocument();
});

it("shouldn't have a 'Reserve a Table' button in /confirmed route", async () => {
	// Arrange
	renderEditor(["/confirmed"]);

	// Act
	const button = screen.queryByText("Reserve a Table");

	// Test
	expect(button).not.toBeInTheDocument();
});

it("should have a 'Reserve a Table' button in home to /booking", async () => {
	// Arrange
	renderEditor();

	// Act
	const button = screen.queryByText("Reserve a Table");

	// Test
	expect(button).toHaveAttribute("href", "/booking");
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Test
	expect(results).toHaveNoViolations();
});
