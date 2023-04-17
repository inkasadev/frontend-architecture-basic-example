import { forwardRef } from "react";
import { Link } from "react-router-dom";

import "theme.css";
import styles from "./styles.module.css";

export const Menu = forwardRef(({ position }, ref) => {
	return (
		<div className={styles.container} ref={ref}>
			<ul className={styles.links} data-position={position}>
				<li>
					<Link to="/" className={styles.link}>
						Home
					</Link>
				</li>
				<li>
					<Link to="" className={styles.link}>
						About
					</Link>
				</li>
				<li>
					<Link to="" className={styles.link}>
						Menu
					</Link>
				</li>
				<li>
					<Link to="booking" className={styles.link}>
						Reservations
					</Link>
				</li>
				<li>
					<Link to="" className={styles.link}>
						Order Online
					</Link>
				</li>
				<li>
					<Link to="" className={styles.link}>
						Login
					</Link>
				</li>
			</ul>
		</div>
	);
});
