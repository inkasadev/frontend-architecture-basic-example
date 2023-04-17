import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "components/screens/Home";
import { Booking } from "components/screens/Booking";
import { Navbar } from "components/patterns/Navbar";
import { Hero } from "components/patterns/Hero";
import { Footer } from "components/patterns/Footer";
import { ConfirmedBooking } from "components/screens/ConfirmedBooking";
import { Testimonials } from "components/patterns/Testimonials";
import { About } from "components/patterns/About";

export const PageRoutes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="booking" element={<Booking />} />
				<Route path="confirmed" element={<ConfirmedBooking />} />
			</Routes>
			<Testimonials />
			<About />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
