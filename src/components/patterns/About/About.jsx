import React from "react";
import { Title } from "components/atoms/Title";

import "theme.css";
import styles from "./styles.module.css";

import aboutImg from "assets/images/about.png";

export const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<div className={styles.aboutText}>
					<Title />
					<p className={styles.description}>
						Little Lemon is a charming neighborhood bistro that serves simples
						food and classic cocktails in a lively but casual environment. The
						restaurant features a locally-sourced menu with daily specials.
					</p>
				</div>
				<div className={styles.aboutImg}>
					<img src={aboutImg} alt="Little Lemon photos" aria-hidden={true} />
				</div>
			</div>
		</div>
	);
};
