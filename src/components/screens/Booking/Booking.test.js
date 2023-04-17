import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Standard } from "./Booking.stories";
import { Home } from "../Home";
import { ConfirmedBooking } from "../ConfirmedBooking";
import { act } from "react-dom/test-utils";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate,
}));

const renderEditor = () => {
	const utils = render(
		<MemoryRouter initialEntries={["/booking"]}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="booking" element={<Standard />} />
				<Route path="confirmed" element={<ConfirmedBooking />} />
			</Routes>
		</MemoryRouter>,
	);

	return {
		...utils,
	};
};

it("should submit the form", () => {
	// Arrange
	renderEditor();

	// Act
	const submitButton = screen.getByText("Make Your reservation");
	act(() => {
		fireEvent.submit(submitButton);
	});

	// Assert
});

it("should be accessible", async () => {
	// Arrange

	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
