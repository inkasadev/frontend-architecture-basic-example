import React from "react";
import cs from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const ButtonPrimary = ({ size, text, className, to }) => {
	return (
		<Link to={to} className={cs(styles.ctaButton, styles[size], className)}>
			{text}
		</Link>
	);
};
