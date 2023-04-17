import { render, screen } from "@testing-library/react";
import { Standard } from "./SpecialsCard.stories";
import greekSaladImg from "assets/images/greek-salad.png";
import { axe } from "jest-axe";
import { MemoryRouter } from "react-router-dom";

const data = {
	image: greekSaladImg,
	title: "Greek salad",
	price: "$12.99",
	description:
		"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
};

const renderEditor = () => {
	const utils = render(
		<MemoryRouter>
			<Standard {...data} />
		</MemoryRouter>,
	);

	return {
		...utils,
	};
};

it("should render the food image", () => {
	// Arrange
	renderEditor();

	// Act
	const card = screen.getByRole("img");

	// Assert
	expect(card).toHaveAttribute("src", data.image);
	expect(card).toHaveAttribute("alt", `${data.title} image`);
});

it("should render the food info", () => {
	// Arrange
	renderEditor();

	// Act
	const title = screen.getByText(data.title);
	const price = screen.getByText(data.price);
	const description = screen.getByText(data.description);

	// Assert
	expect(title).toHaveTextContent(data.title);
	expect(price).toHaveTextContent(data.price);
	expect(description).toHaveTextContent(data.description);
});

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
