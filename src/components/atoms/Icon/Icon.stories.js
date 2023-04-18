import React from "react";

import { Icon } from "./Icon";

export default {
	title: "Atoms/Icon",
};

const Template = (args) => <Icon {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	name: "fa-lemon",
};
