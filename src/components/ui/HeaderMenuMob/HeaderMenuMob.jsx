import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import s from "./styles.module.scss";
import NavBar from "../NavBar/NavBar";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import Button from "../Button/Button";
import { AuthContext } from "../../../context/AuthContext";

export default function HeaderMenuMob({ className }) {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={`${s.headerMenuMob__container} ${className}`}>
      <div className={s.headerMenuMob__nav}>
        <NavBar className={s.headerMenuMob__navBar} />
      </div>
      <div className={s.headerMenuMob__navBtns}>
        {isAuthenticated ? (
          <>
            <Button
              onClick={handleLogout}
              className={s.headerMenuMob__signOutBtn}
            >
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Button className={s.headerMenuMob__signUpBtn}>
              Зарегистрироваться
            </Button>
            <ButtonSignIn className={s.headerMenuMob__signInBtn} />
          </>
        )}
      </div>
    </div>
  );
}

HeaderMenuMob.propTypes = {
  className: PropTypes.string,
};

HeaderMenuMob.defaultProps = {
  className: "",
};
