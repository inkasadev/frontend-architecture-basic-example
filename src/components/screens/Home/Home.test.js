const { render } = require("@testing-library/react");
const { axe } = require("jest-axe");
const { MemoryRouter } = require("react-router-dom");
const { Standard } = require("./Home.stories");

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

it("should be accessible", async () => {
	// Arrange
	const { container } = renderEditor();

	// Act
	const results = await axe(container);

	// Assert
	expect(results).toHaveNoViolations();
});
