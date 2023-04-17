import React from "react";
import { Footer } from "components/patterns/Footer";
import { Hero } from "components/patterns/Hero";
import { Navbar } from "components/patterns/Navbar";
import { withRouter } from "storybook-addon-react-router-v6";

import { ConfirmedBooking } from "./ConfirmedBooking";
import { Route, Routes } from "react-router-dom";
import { Testimonials } from "components/patterns/Testimonials";
import { About } from "components/patterns/About";

export default {
	title: "Screens/ConfirmedBooking",
	component: ConfirmedBooking,
	decorators: [withRouter],
};

const CompositionTemplate = () => (
	<>
		<Navbar />
		<Hero showCta={false} />
		<Routes>
			<Route path={"/"} element={<ConfirmedBooking />} />
		</Routes>
		<Testimonials />
		<About />
		<Footer />
	</>
);

export const Standard = () => <CompositionTemplate />;
Standard.story = {
	parameters: {
		reactRouter: {
			routePath: "/booking-confirmed",
		},
	},
};
