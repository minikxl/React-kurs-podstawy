import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from '../../components/Header/HeaderNavigation';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.svg';

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImg} alt="logo"/>
        <HeaderNavigation/>
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
);

export default Header;