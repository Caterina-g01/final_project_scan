import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles.module.scss';
import checkMarkImg from '../../../assets/images/icons/checkMark.png';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div
      className={s.checkbox__container}
      onClick={() => onChange(!checked)}
    >
      <input
        type="checkbox"
        className={s.checkbox__input}
        checked={checked}
        onChange={() => {}}
      />
      <span className={classNames(s.checkbox__custom, { [s.checked]: checked })}>
        {checked && <img src={checkMarkImg} className={s.checkbox__checkmark} alt="Checked" />}
      </span>
      <label className={classNames(s.checkbox__label, { [s.checkbox__labelGray]: !checked })}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
