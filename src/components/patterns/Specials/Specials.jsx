import React from "react";
import { ButtonPrimary } from "components/atoms/ButtonPrimary";
import { SpecialsCard } from "components/atoms/SpecialsCard";

import "theme.css";
import styles from "./styles.module.css";
import { data } from "./data";

export const Specials = () => {
	return (
		<div className={styles.container}>
			<div className={styles.specials}>
				<div className={styles.specialsHeader}>
					<h2 className={styles.specialsTitle}>This weeks specials!</h2>
					<div className={styles.topCta}>
						<ButtonPrimary text="Online Menu" size="large" />
					</div>
				</div>
				<div className={styles.specialsBody}>
					<div className={styles.specialsCards}>
						{data.map((props) => (
							<SpecialsCard
								{...props}
								className={styles.specialsCard}
								key={props.title}
							/>
						))}
					</div>
				</div>
				<div className={styles.specialsFooter}>
					<ButtonPrimary
						text="Online Menu"
						size="large"
						className={styles.bottomCta}
					/>
				</div>
			</div>
		</div>
	);
};
