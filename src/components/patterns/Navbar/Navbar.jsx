import React, { useEffect, useRef, useState } from "react";
import { Menu } from "components/atoms/Menu";
import { Icon } from "components/atoms/Icon";
import { Logo } from "components/atoms/Logo";

import "theme.css";
import styles from "./styles.module.css";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuContainerRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		const menuHeight = menuRef.current.getBoundingClientRect().height;

		if (showMenu) {
			menuContainerRef.current.style.height = `${menuHeight}px`;
		} else {
			menuContainerRef.current.style.height = "0px";
		}
	}, [showMenu]);

	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<div className={styles.navHeader}>
					<Logo />
					<button
						className={styles.navToggle}
						onClick={() => setShowMenu(!showMenu)}
						aria-expanded={showMenu}
						aria-label="Main Menu Toggle"
						aria-controls="main-menu"
					>
						<Icon name="fa-bars" aria-hidden="true" />
					</button>
				</div>
				<nav className={styles.menuContainer} ref={menuContainerRef}>
					<Menu id="main-menu" ref={menuRef} />
				</nav>
			</div>
		</div>
	);
};
