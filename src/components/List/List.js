import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({items, type}) => (
    <>
    { items.length ? (
    <ul className={styles.wrapper}>
        {items.map( item => (
            <ListItem key={item.title} {...item} type={type} />  
        ))}
    </ul>)
    :(
    <p className={styles.noItems}>There's nothing here yet, please add some items! 💖</p>)}
    </>
);

export default List;