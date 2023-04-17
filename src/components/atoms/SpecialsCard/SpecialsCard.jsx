import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import cs from "classnames";

import "theme.css";
import styles from "./styles.module.css";

export const SpecialsCard = ({
	image,
	title,
	price,
	description,
	link,
	className,
}) => {
	return (
		<div className={cs(styles.card, className)}>
			<img src={image} alt={`${title} image`} className={styles.image} />
			<div className={styles.cardContent}>
				<div className={styles.header}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.price}>{price}</p>
				</div>
				<p className={styles.description}>{description}</p>
				<div className={styles.footer}>
					<Link to={link} className={styles.link}>
						Order a delivery
					</Link>
					<Icon name="fa-motorcycle" />
				</div>
			</div>
		</div>
	);
};
