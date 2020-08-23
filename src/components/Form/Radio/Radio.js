import React from 'react'
import styles from './Radio.module.scss'

const Radio = ({children, changeFn, checked}) => {

    return(
        <>
            <label className={styles.radio}>
            <input 
                
                type="radio"
                onChange={changeFn}
                checked={checked}
            />
            <div className={styles.radioButton}/>
            {children}
            </label>
        </>
    );
};

export default Radio;