import React from "react";

import { Rating } from "./Rating";

export default {
	title: "Atoms/Rating",
};

const Template = (args) => <Rating {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	value: "3",
};
