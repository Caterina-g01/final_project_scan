import React from "react";
import s from "./styles.module.scss";
import logo from "../../assets/images/icons/Logo.svg";
import Button from "../ui/Button/Button";
import classNames from "classnames";

export default function Header() {
  return (
    <div className={s.header__container}>
      <img src={logo} className={s.header__logo} alt="SCAN" />
      <ul className={s.header__navBar}>
        <li className={s.header__navBar__link}>Главная</li>
        <li className={s.header__navBar__link}>Тарифы</li>
        <li className={s.header__navBar__link}>FAQ</li>
      </ul>
      <div className={s.header__buttons}>
      <Button className={s.header__signUpBtn}>Зарегистрироваться</Button>
      <div className={s.header__separator}></div>
      <Button className={s.header__signInBtn}>Войти</Button>
      </div>
    </div>
  );
}
