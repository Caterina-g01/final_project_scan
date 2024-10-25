import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../ui/Input/Input";
import s from "./styles.module.scss";
import Button from "../../../ui/Button/Button";
import Google from "../../../../assets/images/icons/google.svg";
import Facebook from "../../../../assets/images/icons/facebook.svg";
import Yandex from "../../../../assets/images/icons/yandex.svg";
import { logIn } from "../../../../requests/authActions";
import { userErrorRemove } from "../../../../store/userSlice";

export default function SignInWindow() {
  const [phoneOrLogin, setPhoneOrLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    phoneOrLogin: "",
    password: "",
  });

  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid =
    phoneOrLogin && password && !errors.phoneOrLogin && !errors.password;

  const handlePhoneOrLoginChange = (e) => {
    setPhoneOrLogin(e.target.value);
    if (e.target.value.length < 5) {
      setErrors((prev) => ({
        ...prev,
        phoneOrLogin: "Введите корректные данные для логина",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phoneOrLogin: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Неправильный пароль" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expire = localStorage.getItem("expire");

    if (token && expire && new Date(expire) > new Date()) {
      console.log("Токен активен, перенаправляем на главную");
      navigate("/");
    }
  }, [navigate]);

  const handleSignIn = () => {
    if (!isFormValid) return;

    try {
      dispatch(userErrorRemove());

      dispatch(logIn(phoneOrLogin, password)).then(() => {
        const token = localStorage.getItem("token");

        if (token) {
          console.log(
            "Авторизация прошла успешно, перенаправление на главную страницу"
          );
          navigate("/");
        } else {
          setErrors((prev) => ({ ...prev, password: "Неправильный пароль" }));
          console.warn("Авторизация не удалась, токен не установлен.");
        }
      });
    } catch (err) {
      console.error("Ошибка подключения к серверу:", err);
    }
  };

  return (
    <div className={s.signInWindow__container}>
      <div className={s.loginContainer}>
        <p className={s.loginTitle}>Логин или номер телефона:</p>
        <Input
          className={classNames(s.customInput, {
            [s.errorInput]: errors.phoneOrLogin,
          })}
          placeholder="Введите логин или номер телефона"
          value={phoneOrLogin}
          onChange={handlePhoneOrLoginChange}
          autoComplete="on"
          required
        />
        {errors.phoneOrLogin && (
          <p className={s.errorMessage}>{errors.phoneOrLogin}</p>
        )}
      </div>
      <div className={s.passwordContainer}>
        <p className={s.passwordTitle}>Пароль:</p>
        <Input
          className={classNames(s.customInput, {
            [s.errorInput]: errors.password,
          })}
          placeholder="Введите пароль"
          type="password"
          value={password}
          autoComplete="on"
          required
          onChange={handlePasswordChange}
        />
        {errors.password && <p className={s.errorMessage}>{errors.password}</p>}
      </div>
      <div className={s.buttons__container}>
        <Button
          className={classNames(s.signInBtn, { [s.disabled]: !isFormValid })}
          disabled={!isFormValid}
          onClick={handleSignIn}
        >
          Войти
        </Button>
        <a className={s.forgotPasswordLink} href="#">
          Восстановить пароль
        </a>
      </div>
      <div className={s.otherWaysToSignIn__container}>
        <p className={s.otherWaysToSignIn__title}>Войти через:</p>
        <div className={s.otherWaysToSignIn__content}>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img
              className={s.otherWaysToSignIn__img}
              src={Google}
              alt="Google"
            />
          </a>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img
              className={s.otherWaysToSignIn__img}
              src={Facebook}
              alt="Facebook"
            />
          </a>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img
              className={s.otherWaysToSignIn__img}
              src={Yandex}
              alt="Yandex"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
