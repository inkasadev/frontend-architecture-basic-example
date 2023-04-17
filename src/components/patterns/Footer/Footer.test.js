const { render, screen } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./Footer.stories");

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

it("should have a logo", async () => {
	// Arrange
	renderEditor();

	// Act
	const logo = screen.getByAltText("Little Lemon Logo");

	// Assert
	expect(logo).toBeInTheDocument();
});

it("should have a menu with data-position='footer'", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const menu = container.querySelector(".links");

	// Assert
	expect(menu).toBeInTheDocument();
	expect(menu).toHaveAttribute("data-position", "footer");
});

it("should have contact info", () => {
	// Arrange
	renderEditor();

	// Act
	const address = screen.getByText("853 Sand Fork Road");
	const phoneNumber = screen.getByText("574-626-9398");
	const email = screen.getByText("contact@littlelemon.com");

	// Assert
	expect(address).toBeInTheDocument();
	expect(phoneNumber).toBeInTheDocument();
	expect(email).toBeInTheDocument();
});

it("should have social links", () => {
	// Arrange
	renderEditor();

	// Act
	// const facebook = screen.getByText("https://www.facebook.com");
	const facebook = screen.getByLabelText("facebook link");
	const instagram = screen.getByLabelText("instagram link");
	const twitter = screen.getByLabelText("twitter link");
	const tiktok = screen.getByLabelText("tiktok link");

	// Assert
	expect(facebook).toBeInTheDocument();
	expect(instagram).toBeInTheDocument();
	expect(twitter).toBeInTheDocument();
	expect(tiktok).toBeInTheDocument();
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
