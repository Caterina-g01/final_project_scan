import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import NavBar from '../NavBar/NavBar';
import ButtonSignIn from '../ButtonSignIn/ButtonSignIn';
import Button from '../Button/Button';

export default function HeaderMenuMob({ className }) {
  return (
    <div className={`${s.headerMenuMob__container} ${className}`}>
      <div className={s.headerMenuMob__nav}>
      <NavBar className={s.headerMenuMob__navBar} />
      </div>
      <div className={s.headerMenuMob__navBtns}>
        <Button className={s.headerMenuMob__signUpBtn}>Зарегистрироваться</Button>
      <ButtonSignIn className={s.headerMenuMob__signInBtn} />
      </div>
    </div>
  );
}

HeaderMenuMob.propTypes = {
  className: PropTypes.string,
};

HeaderMenuMob.defaultProps = {
  className: '',
};
