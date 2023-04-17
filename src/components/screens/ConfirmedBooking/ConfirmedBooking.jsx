import { ButtonPrimary } from "components/atoms/ButtonPrimary/ButtonPrimary";
import React from "react";

import "theme.css";
import styles from "./styles.module.css";

export const ConfirmedBooking = () => {
	return (
		<div className={styles.container}>
			<div className={styles.confirmedBooking}>
				<h2 className={styles.confirmedMessage}>Success!</h2>
				<div>
					<ButtonPrimary text="Return to Home" to="/" />
				</div>
			</div>
		</div>
	);
};
