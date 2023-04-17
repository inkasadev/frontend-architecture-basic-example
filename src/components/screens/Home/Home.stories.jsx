import { Footer } from "components/patterns/Footer";
import { Hero } from "components/patterns/Hero";
import { Navbar } from "components/patterns/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";
import { Home } from "./Home";

export default {
	title: "Screens/Home",
	component: Home,
	decorators: [withRouter],
};

const CompositionTemplate = () => (
	<>
		<Navbar />
		<Hero />
		<Routes>
			<Route path={"/"} element={<Home />} />
		</Routes>
		<Footer />
	</>
);

export const Standard = () => <CompositionTemplate />;
Standard.story = {
	parameters: {
		reactRouter: {
			routePath: "/",
		},
	},
};

/*
const CompositionTemplate = ({outlet, ...args}) => (
    <Routes>
        <Route path={"/"} element={<Menu {...args} />}>
            <Route index element={outlet} />
        </Route>
     </Routes>
);
    
export const Composition = CompositionTemplate.bind({});
Composition.args = {
    outlet: <OrdersSubMenu />
} */
