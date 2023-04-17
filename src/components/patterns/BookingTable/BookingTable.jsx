import React from "react";
import { BookingForm } from "components/atoms/BookingForm";

import "theme.css";
import styles from "./styles.module.css";

export const BookingTable = () => {
	return (
		<div className={styles.bookingTable}>
			<h2 className={styles.bookingTitle}>Reserve a Table</h2>
			<BookingForm />
		</div>
	);
};
