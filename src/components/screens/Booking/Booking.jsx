import React from "react";
import { BookingTable } from "components/patterns/BookingTable";

import "theme.css";
import styles from "./styles.module.css";

export const Booking = () => {
	return (
		<div className={styles.container}>
			<BookingTable />
		</div>
	);
};
