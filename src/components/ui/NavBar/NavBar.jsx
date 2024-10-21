import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


export default function NavBar({ className = '' }) { 
  return (
    <ul className={classNames(s.navBar, className)}>
        <Link to="/"><li className={s.navBar__link}>Главная</li></Link>
      
      <li className={s.navBar__link}>Тарифы</li>
      <li className={s.navBar__link}>FAQ</li>
    </ul>
    
  );
}

NavBar.propTypes = {
  className: PropTypes.string,
};
