import React from "react";
import { Icon } from "../Icon";

import "theme.css";
import styles from "./styles.module.css";

export const Rating = ({ value }) => {
	value = Math.max(1, Math.min(5, value));
	const starsFilled = [...Array(value).keys()];
	const starsEmpty = [...Array(5 - value).keys()];

	return (
		<div className={styles.rating}>
			{starsFilled.map((value) => (
				<Icon name="fa-star" className={styles.star} key={value} />
			))}

			{starsEmpty.map((value) => (
				<Icon name="fa-star" className={styles.starEmpty} key={value} />
			))}
		</div>
	);
};
