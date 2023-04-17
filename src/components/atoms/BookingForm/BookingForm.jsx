import React, { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "api";
import cs from "classnames";

import "theme.css";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const BookingForm = () => {
	let currentDate = new Date();
	const offset = currentDate.getTimezoneOffset();
	currentDate = new Date(currentDate.getTime() - offset * 60 * 1000);
	currentDate = currentDate.toISOString().split("T")[0];

	const navigate = useNavigate();

	const [date, setDate] = useState(currentDate);
	const [time, setTime] = useState();
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState();
	const [availableTimes, setAvailableTimes] = useState([]);

	const onSubmit = async (e) => {
		const data = { date, time, guests, occasion };

		const result = await submitAPI(data);

		if (result) navigate("/confirmed");

		e.preventDefault();
	};

	useEffect(() => {
		setAvailableTimes(fetchAPI(new Date(date)));
	}, [date]);

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.inputGroup}>
					<label htmlFor="date" className={styles.label}>
						Choose date
					</label>
					<input
						type="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className={cs(styles.input, styles.inputDate)}
						required
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="time" className={styles.label}>
						Choose time
					</label>
					<select
						id="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						className={cs(styles.input, styles.inputSelect)}
					>
						{availableTimes &&
							availableTimes.map((time) => {
								return (
									<option key={time} value={time}>
										{time}
									</option>
								);
							})}
					</select>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="guests" className={styles.label}>
						Number of guests
					</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
						className={cs(styles.input, styles.inputNumber)}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="occasion" className={styles.label}>
						Occasion
					</label>
					<select
						id="occasion"
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
						className={cs(styles.input, styles.inputSelect)}
					>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
					</select>
				</div>

				<input
					type="submit"
					value="Make Your reservation"
					className={styles.submitBtn}
				/>
			</form>
		</div>
	);
};
