import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import s from "./styles.module.scss";
import logo from "../../assets/images/icons/Logo.svg";
import Button from "../ui/Button/Button";
import NavBar from "../ui/NavBar/NavBar";
import BurgerButton from "../ui/BurgerButton/BurgerButton";
import HeaderMenuMob from "../ui/HeaderMenuMob/HeaderMenuMob";
import ButtonSignIn from "../ui/ButtonSignIn/ButtonSignIn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={s.header__container}>
      <img src={logo} className={s.header__logo} alt="SCAN" />
      <div className={s.header__burger}>
        <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <NavBar className={s.header__navBar} />
      <div className={s.header__buttons}>
        <Button className={s.header__signUpBtn}>Зарегистрироваться</Button>
        <div className={s.header__separator}></div>
        <Link to="/auth">
          <ButtonSignIn className={s.header__signInBtn}>Войти</ButtonSignIn>
        </Link>
      </div>
      {isMenuOpen && <HeaderMenuMob className={s.headerMenuMob} />}
    </div>
  );
}
