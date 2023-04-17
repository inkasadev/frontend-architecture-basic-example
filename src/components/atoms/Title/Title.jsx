import React from "react";
import "theme.css";
import styles from "./styles.module.css";

export const Title = () => {
	return (
		<h1 className={styles.title}>
			Little Lemon <span className={styles.subtitle}>Chicago</span>
		</h1>
	);
};
