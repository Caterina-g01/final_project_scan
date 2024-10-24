import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./styles.module.scss";
import logo from "../../assets/images/icons/Logo.png";
import Button from "../ui/Button/Button";
import NavBar from "../ui/NavBar/NavBar";
import BurgerButton from "../ui/BurgerButton/BurgerButton";
import HeaderMenuMob from "../ui/HeaderMenuMob/HeaderMenuMob";
import ButtonSignIn from "../ui/ButtonSignIn/ButtonSignIn";
import Avatar from "../../assets/images/icons/avatar.png";
import { userLogout } from "../../store/userSlice";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuth);
  const usedCompanyCount = useSelector((state) => state.user.usedCompanyCount);
  const companyLimit = useSelector((state) => state.user.companyLimit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
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
            <ul className={s.header__autorizedUser__limit}>
              <li className={s.header__autorizedUser__limit__item}>
                Использовано компаний
                <span className={s.usedCompanies}>{usedCompanyCount}</span>
              </li>
              <li className={s.header__autorizedUser__limit__item}>
                Лимит по компаниям
                <span className={s.limitCompanies}>{companyLimit}</span>
              </li>
            </ul>
            <div className={s.header__autorizedUser__info}>
              <div className={s.header__autorizedUser__nameContainer}>
                <p className={s.header__autorizedUser__name}>Алексей А.</p>
                <Button
                  className={s.header__autorizedUser__btn}
                  onClick={handleLogout}
                >
                  Выйти
                </Button>
              </div>
              <img
                className={s.header__autorizedUser__img}
                src={Avatar}
                alt="Avatar"
              />
            </div>
          </div>
        ) : (
          <>
            <Button className={s.header__signUpBtn}>Зарегистрироваться</Button>
            <div className={s.header__separator}></div>
            <ButtonSignIn
              className={s.header__signInBtn}
              onClick={() => navigate("/auth")}
              text="Войти"
            />
          </>
        )}
      </div>
      {isMenuOpen && <HeaderMenuMob className={s.headerMenuMob} />}
    </header>
  );
}
