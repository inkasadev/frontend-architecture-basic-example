import React from "react";
import { Testimonial } from "./Testimonial";

import avatarMarcos from "assets/images/avatar-marcos.png";

export default {
	title: "Atoms/Testimonial",
};

// export const Standard = () => <Testimonial />;

const Template = (args) => <Testimonial {...args} avatar={avatarMarcos} />;

export const Standard = Template.bind({});
Standard.args = {
	rating: "3",
	name: "Marcos Santos",
	description: "The food is amazing and the atmosphere is incredible.",
};
