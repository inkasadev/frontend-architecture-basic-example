import React from "react";

import { SpecialsCard } from "./SpecialsCard";
import greekSaladImg from "assets/images/greek-salad.png";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
	title: "Atoms/SpecialsCard",
	decorators: [withRouter],
};

const Template = (args) => (
	<SpecialsCard {...args} image={greekSaladImg} link="" />
);

export const Standard = Template.bind({});
Standard.args = {
	title: "Greek salad",
	price: "$12.99",
	description:
		"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
};
