import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Navbar } from "./Navbar";

export default {
	title: "Patterns/Navbar",
	decorators: [withRouter],
};

export const Standard = () => <Navbar />;
