import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Footer } from "./Footer";

export default {
	title: "Patterns/Footer",
	decorators: [withRouter],
};

export const Standard = () => <Footer />;
