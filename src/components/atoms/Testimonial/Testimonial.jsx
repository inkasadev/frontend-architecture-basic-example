import React from "react";
import { Rating } from "../Rating";
import cs from "classnames";

import "theme.css";
import styles from "./styles.module.css";

export const Testimonial = ({
	rating,
	avatar,
	name,
	description,
	className,
}) => {
	return (
		<div className={cs(styles.testimonial, className)}>
			<Rating value={rating} />
			<div className={styles.user}>
				<img src={avatar} alt={`${name} photo`} className={styles.avatar} />
				<p className={styles.name}>{name}</p>
			</div>
			<p className={styles.description}>"{description}"</p>
		</div>
	);
};
