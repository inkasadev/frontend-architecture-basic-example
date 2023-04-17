import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import { BookingTable } from "./BookingTable";

export default {
	title: "Patterns/BookingTable",
	decorators: [withRouter],
};

export const Standard = () => <BookingTable />;
