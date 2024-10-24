import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./styles.module.scss";
import Button from "../Button/Button";
import SignInWindow from "../../Main/AutorizationWindows/SignInWindow/SignInWindow";
import SignUpWindow from "../../Main/AutorizationWindows/SignUpWindow/SignUpWindow";
import Lock from "../../../assets/images/icons/Lock.svg";

export default function Placeholder({ className = "" }) {
  const [activeWindow, setActiveWindow] = useState("signIn");

  const handleSignInClick = () => {
    setActiveWindow("signIn");
  };

  const handleSignUpClick = () => {
    setActiveWindow("signUp");
  };

  const isSignInDisabled = activeWindow === "signUp";
  const isSignUpDisabled = activeWindow === "signIn";

  return (
    <div className={classNames(s.placeholder__container, className)}>
      <img className={s.placeholder__lockImg} src={Lock} alt="" />
      <div className={s.placeholder__btnsContainer}>
        <Button
          className={classNames(s.placeholder__btnSignIn, {
            [s.disabled]: isSignInDisabled,
          })}
          onClick={handleSignInClick}
          disabled={isSignInDisabled}
        >
          Войти
        </Button>
        <Button
          className={classNames(s.placeholder__btnSignUp, {
            [s.disabled]: isSignUpDisabled,
          })}
          onClick={handleSignUpClick}
          disabled={isSignUpDisabled}
        >
          Зарегистрироваться
        </Button>
      </div>
      {activeWindow === "signIn" && <SignInWindow />}
      {activeWindow === "signUp" && <SignUpWindow />}
    </div>
  );
}

Placeholder.propTypes = {
  className: PropTypes.string,
};
