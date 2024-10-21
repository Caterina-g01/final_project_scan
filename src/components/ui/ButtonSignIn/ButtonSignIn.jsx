import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles.module.scss';

export default function ButtonSignIn({ className, onClick, text }) {
  return (
    <button
      className={classNames(s.buttonSignIn, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

ButtonSignIn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

ButtonSignIn.defaultProps = {
  className: '',
  text: 'Войти',
};
