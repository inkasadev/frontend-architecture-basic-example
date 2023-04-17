import { render, screen } from "@testing-library/react";
import { Standard } from "./Logo.stories";

it("should render the logo'", async () => {
	// ARRANGE
	render(<Standard />);

	// ACT
	const logo = screen.getByRole("img");

	// ASSERT
	expect(logo).toHaveAttribute("src", "logo.svg");
	expect(logo).toHaveAttribute("alt", "Little Lemon logo");
});
