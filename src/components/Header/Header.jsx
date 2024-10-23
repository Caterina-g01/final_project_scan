import React, { useState, useEffect, useContext } from "react";
import s from "./styles.module.scss";
import logo from "../../assets/images/icons/Logo.png";
import Button from "../ui/Button/Button";
import NavBar from "../ui/NavBar/NavBar";
import BurgerButton from "../ui/BurgerButton/BurgerButton";
import HeaderMenuMob from "../ui/HeaderMenuMob/HeaderMenuMob";
import ButtonSignIn from "../ui/ButtonSignIn/ButtonSignIn";
import Avatar from "../../assets/images/icons/avatar.png";
import { AuthContext } from '../../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.header__container}>
      <img src={logo} className={s.header__logo} alt="SCAN" />
      <div className={s.header__burger}>
        <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <NavBar className={s.header__navBar} />
      <div className={s.header__buttons}>
        {isAuthenticated ? (
          <div className={s.header__autorizedUser}>
            <div className={s.header__autorizedUser__nameContainer}>
            <p className={s.header__autorizedUser__name}>Алексей А.</p>
            <Button
              className={s.header__autorizedUser__btn}
              onClick={logout} 
            >
              Выйти
            </Button>
            </div>
            <img className={s.header__autorizedUser__img} src={Avatar} alt="" />
          </div>
        ) : (
          <>
            <Button className={s.header__signUpBtn}>Зарегистрироваться</Button>
            <div className={s.header__separator}></div>
            <ButtonSignIn className={s.header__signInBtn}>Войти</ButtonSignIn>
          </>
        )}
      </div>
      {isMenuOpen && <HeaderMenuMob className={s.headerMenuMob} />}
    </header>
  );
}
