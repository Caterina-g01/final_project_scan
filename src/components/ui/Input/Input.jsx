import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles.module.scss';

export default function Input({ className, placeholder, value, onChange, pattern, type }) {
  return (
    <div className={s.input__container}>
      <input
        className={classNames(s.input, className)}
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
      />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
  placeholder: 'Введите текст',
  value: '',
  pattern: '',
  type: 'text',
};
