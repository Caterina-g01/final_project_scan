import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

export default function Button({ className, onClick, children }) {
  return (
    <button className={`${s.button} ${className}`}onClick={onClick}>
      {children}
    </button>
  );
}


Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, 
};
