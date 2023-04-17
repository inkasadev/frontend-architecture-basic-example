import React from "react";

import "theme.css";
import styles from "./styles.module.css";

import { data } from "./data.js";
import { Testimonial } from "components/atoms/Testimonial";
/*
Little Lemon is truly a hidden gem. The restaurant is family-owned and the atmosphere is warm and cozy. The food is amazing - it's full of flavor and the traditional recipes are served with a modern twist that makes them even more enjoyable! I highly recommend it to anyone looking for a great dining experience.

- Hebert Phillipe

—

Little Lemon has become my family's go-to restaurant. The food is always fresh and delicious, with a modern twist on traditional Mediterranean recipes. Every time we visit, the service is outstanding and the staff are super friendly - it really feels like a home away from home! Highly recommend Little Lemon to anyone looking for delicious food and an amazing atmosphere.

- Hebert Phillipe

—

Little Lemon is such a wonderful restaurant! Every time I go there, I'm welcomed warmly and served amazing food. The traditional recipes are cooked to perfection and the modern twists add a unique flavor that I love. The atmosphere is cozy, yet vibrant and the staff are so friendly. Little Lemon is my go-to place for Mediterranean cuisine!

- Hebert Phillipe

—

Little Lemon is an absolute gem! I have been visiting this family-run restaurant for years now, and their food has never failed to impress. They have a wonderful selection of traditional Mediterranean recipes with a modern twist that are always cooked to perfection. The service is also top-notch; the staff are always attentive and friendly, making it an all-round delightful experience. Highly recommended!

- Hebert Phillipe

—

Little Lemon is an absolute gem! The food is amazing and the atmosphere is incredible. The restaurant is family owned, so you can tell that there's a lot of love that goes into their dishes. The recipes are traditional but with a modern twist, which makes them even more special. Highly recommend Little Lemon for a delicious Mediterranean feast!

- Hebert Phillipe

—

Little Lemon is an incredible Mediterranean restaurant. The atmosphere is cozy and inviting, the staff are always friendly and helpful, and the food...oh my goodness, the food! Every dish is cooked with love and uses traditional recipes with a modern twist. It's easily one of the best restaurants in town and I'm so glad to have discovered it! Highly recommended!

- Hebert Phillipe
*/

export const Testimonials = () => {
	return (
		<div className={styles.container}>
			<div className={styles.testimonials}>
				<h2 className={styles.title}>Testimonials</h2>
				<div className={styles.testimonialsGroup}>
					{data.map((props) => (
						<Testimonial {...props} key={props.name} />
					))}
				</div>
			</div>
		</div>
	);
};
