import React from "react";

import "theme.css";
import styles from "./styles.module.css";

import footerLogo from "assets/images/footerLogo.png";
import { Menu } from "components/atoms/Menu";

export const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.logo}>
					<img src={footerLogo} alt="Little Lemon Logo" />
				</div>
				<div className={styles.navigation}>
					<h2 className={styles.title}>Navigation</h2>
					<Menu position="footer" />
				</div>
				<div className={styles.contact}>
					<h2 className={styles.title}>Contact</h2>

					<div className={styles.address}>
						<p>853 Sand Fork Road </p>
						<p>574-626-9398 </p>
						<p>contact@littlelemon.com </p>
					</div>
				</div>
				<div className={styles.social}>
					<h2 className={styles.title}>Social Media Links</h2>
					<div className={styles.socialMediaLinks}>
						<a
							href="https://www.facebook.com"
							className={styles.socialMediaLink}
							aria-label="facebook link"
						>
							<i className="fa-brands fa-square-facebook"></i>
						</a>
						<a
							href="https://www.instagram.com"
							className={styles.socialMediaLink}
							aria-label="instagram link"
						>
							<i className="fa-brands fa-square-instagram"></i>
						</a>
						<a
							href="https://www.twitter.com"
							className={styles.socialMediaLink}
							aria-label="twitter link"
						>
							<i className="fa-brands fa-square-twitter"></i>
						</a>
						<a
							href="https://www.tiktok.com"
							className={styles.socialMediaLink}
							aria-label="tiktok link"
						>
							<i className="fa-brands fa-tiktok"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
