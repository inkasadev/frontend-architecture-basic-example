import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ButtonPrimary } from "./ButtonPrimary";

export default {
	title: "Atoms/ButtonPrimary",
	component: ButtonPrimary,
	decorators: [withRouter],
	argTypes: {
		size: {
			control: "select",
			options: ["medium", "large"],
		},
	},
};

const Template = (args) => <ButtonPrimary {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	text: "Reserve a Table",
};
