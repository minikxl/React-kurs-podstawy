import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    className={styles.navItemLink}
                    activeClassName={styles.navItemLinkActive}
                    to="/">twitter</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    className={styles.navItemLink}
                    activeClassName={styles.navItemLinkActive}
                    to="/articles">articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    className={styles.navItemLink}
                    activeClassName={styles.navItemLinkActive}
                    to="/notes">notes</NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;