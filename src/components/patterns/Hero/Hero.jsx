import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "components/atoms/ButtonPrimary/ButtonPrimary";
import { Title } from "components/atoms/Title";
import { useLocation } from "react-router-dom";

import "theme.css";
import styles from "./styles.module.css";

export const Hero = () => {
	const [showCTA, setShowCTA] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const pathsWithoutCTA = ["/booking", "/confirmed"];

		if (pathsWithoutCTA.indexOf(location.pathname) !== -1) {
			// console.log("location.pathname => ", location.pathname);
			setShowCTA(false);
			return;
		}

		setShowCTA(true);
	}, [location]);

	return (
		<div className={styles.container}>
			<div className={styles.heroBg}></div>
			<header className={styles.hero}>
				<div className={styles.heroContent}>
					<Title />
					<p className={styles.content}>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					{showCTA && <ButtonPrimary text="Reserve a Table" to="booking" />}
				</div>
				<div className={styles.heroImg}></div>
			</header>
		</div>
	);
};
