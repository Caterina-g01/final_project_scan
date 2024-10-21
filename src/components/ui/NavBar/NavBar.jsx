import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import classNames from 'classnames';

export default function NavBar({ className = '' }) { 
  return (
    <ul className={classNames(s.navBar, className)}>
      <li className={s.navBar__link}>Главная</li>
      <li className={s.navBar__link}>Тарифы</li>
      <li className={s.navBar__link}>FAQ</li>
    </ul>
    
  );
}

NavBar.propTypes = {
  className: PropTypes.string,
};
