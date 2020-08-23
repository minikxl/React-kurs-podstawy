import React from 'react'
import styles from './Button.module.scss'

const Button = ({children, href, secondary, ...props}) => {
    
    const buttonClass = secondary ? styles.secondary : styles.button;
    
    return(
        <>
        { 
            href ? (
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" //without this serv return err
                    href={ href } 
                    className={buttonClass}
                > {children} </a>
            ) : (
                <button className={buttonClass} {...props}>
                    {children} 
                </button>
            )
        }
        </>
    );
};

export default Button;