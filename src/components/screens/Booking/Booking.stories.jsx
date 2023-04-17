import React from "react";
import { Footer } from "components/patterns/Footer";
import { Hero } from "components/patterns/Hero";
import { Navbar } from "components/patterns/Navbar";
import { withRouter } from "storybook-addon-react-router-v6";

import { Booking } from "./Booking";
import { Testimonials } from "components/patterns/Testimonials";
import { About } from "components/patterns/About";

export default {
	title: "Screens/Booking",
	component: Booking,
	decorators: [withRouter],
};

const CompositionTemplate = () => (
	<>
		<Navbar />
		<Hero />
		<Booking />
		<Testimonials />
		<About />
		<Footer />
	</>
);

export const Standard = () => <CompositionTemplate />;
Standard.story = {
	parameters: {
		reactRouter: {
			routePath: "/booking",
		},
	},
};
