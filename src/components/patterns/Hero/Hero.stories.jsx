import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Hero } from "./Hero";

export default {
	title: "Patterns/Hero",
	decorators: [withRouter],
};

export const Standard = () => <Hero />;
