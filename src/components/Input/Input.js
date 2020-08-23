import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength, ...props}) => (
    <div className={styles.formItem}>
        <Tag
            className={Tag === 'input' ? styles.input : styles.textarea}
            required
            type='text'
            name={name}
            id={name}
            maxLength={maxLength}
            placeholder=" "
            {...props}
            />
        <label className={styles.label} htmlFor={name}>{label}</label>
        <div className={styles.formItemBar}/>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
}
export default Input;