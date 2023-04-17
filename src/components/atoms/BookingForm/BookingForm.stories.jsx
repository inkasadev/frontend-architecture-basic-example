import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { BookingForm } from "./BookingForm";

export default {
	title: "Atoms/BookingForm",
	decorators: [withRouter],
};

export const Standard = (args) => <BookingForm {...args} />;
