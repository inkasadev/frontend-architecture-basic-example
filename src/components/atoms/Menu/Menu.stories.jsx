import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Menu } from "./Menu";

export default {
	title: "Atoms/Menu",
	decorators: [withRouter],
	argTypes: {
		position: {
			control: "select",
			options: ["header", "footer"],
		},
	},
};

export const Standard = (args) => <Menu {...args} />;
