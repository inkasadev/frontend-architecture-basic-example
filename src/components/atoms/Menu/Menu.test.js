import { render } from "@testing-library/react";
import { Standard } from "./Menu.stories";
import { MemoryRouter } from "react-router-dom";
import { axe } from "jest-axe";

it("should be accessible", async () => {
	// Arrange
	const { container } = render(
		<MemoryRouter history="/">
			<Standard />
		</MemoryRouter>,
	);

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
