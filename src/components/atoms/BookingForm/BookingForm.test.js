const { userEvent } = require("@storybook/testing-library");
const { render, screen, fireEvent } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./BookingForm.stories");

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

it("should change the date input", () => {
	// Arrange
	const date = "1970-01-01";
	renderEditor();

	// Act
	const input = screen.getByLabelText(/date/i);
	userEvent.type(input, date);

	// Assert
	expect(input.value).toBe(date);
});

it("should change the time input", () => {
	// Arrange
	renderEditor();

	// Act
	const input = screen.getByLabelText(/time/i);
	userEvent.selectOptions(input, "17:00");

	// Assert
	expect(screen.getByRole("option", { name: "17:00" }).selected).toBe(true);
	expect(screen.getByRole("option", { name: "17:30" }).selected).toBe(false);
	// expect(screen.getByRole("option", { name: "20:00" }).selected).toBe(false);
	// expect(screen.getByRole("option", { name: "21:00" }).selected).toBe(false);
	expect(screen.getByRole("option", { name: "23:30" }).selected).toBe(false);
});

it("should change the guests input", () => {
	// Arrange
	renderEditor();

	// Act
	const input = screen.getByRole("spinbutton");
	fireEvent.change(input, { target: { value: "2" } });

	// Assert
	expect(input.value).toBe("2");
});

it("should change the occasion input", () => {
	// Arrange
	renderEditor();

	// Act
	const input = screen.getByLabelText(/occasion/i);
	userEvent.selectOptions(input, "Anniversary");

	// Assert
	expect(screen.getByRole("option", { name: "Birthday" }).selected).toBe(false);
	expect(screen.getByRole("option", { name: "Anniversary" }).selected).toBe(
		true,
	);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
