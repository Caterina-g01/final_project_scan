import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../ui/Input/Input";
import s from "./styles.module.scss";
import Button from "../../../ui/Button/Button";
import { logIn } from "../../../../requests/authActions";
import { userErrorRemove } from "../../../../store/userSlice";

export default function SignInWindow() {
  const [phoneOrLogin, setPhoneOrLogin] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormValid = phoneOrLogin && password;

  const handlePhoneOrLoginChange = (e) => setPhoneOrLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async () => {
    dispatch(userErrorRemove());
    try {
      await dispatch(logIn(phoneOrLogin, password));
      navigate("/"); // Перенаправляем на главную страницу
    } catch (err) {
      console.error("Ошибка при входе:", err);
    }
  };

  return (
    <div className={s.signInWindow__container}>
      <div className={s.loginContainer}>
        <p className={s.loginTitle}>Логин или номер телефона:</p>
        <Input
          className={classNames(s.customInput)}
          placeholder="Введите логин или номер телефона"
          value={phoneOrLogin}
          onChange={handlePhoneOrLoginChange}
        />
      </div>
      <div className={s.passwordContainer}>
        <p className={s.passwordTitle}>Пароль:</p>
        <Input
          className={s.customInput}
          placeholder="Введите пароль"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={s.buttons__container}>
        <Button
          className={classNames(s.signInBtn, { [s.disabled]: !isFormValid })}
          disabled={!isFormValid}
          onClick={handleSignIn}
        >
          Войти
        </Button>
        {error && <p className={s.error}>{error}</p>}
        <a className={s.forgotPasswordLink} href="#">
          Восстановить пароль
        </a>
      </div>
      {/* Остальная часть вашего компонента */}
    </div>
  );
}
