import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Specials } from "./Specials";

export default {
	title: "Patterns/Specials",
	decorators: [withRouter],
};

export const Standard = () => <Specials />;
