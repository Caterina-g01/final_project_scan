import React, { useState } from 'react';
import classNames from 'classnames';
import Input from '../../ui/Input/Input';
import s from './styles.module.scss';
import Button from '../../ui/Button/Button';
import Google from '../../../assets/images/icons/google.svg';
import Facebook from '../../../assets/images/icons/facebook.svg';
import Yandex from '../../../assets/images/icons/yandex.svg';

export default function SignInWindow() {
  const [phoneOrLogin, setPhoneOrLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePhoneOrLoginChange = (e) => {
    const value = e.target.value;
    setPhoneOrLogin(value);

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = phoneOrLogin && password; 

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
        >
          Войти
        </Button>

        <a className={s.forgotPasswordLink} href="#">Восстановить пароль</a>
      </div>
      <div className={s.otherWaysToSignIn__container}>
        <p className={s.otherWaysToSignIn__title}>Войти через:</p>
        <div className={s.otherWaysToSignIn__content}>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img className={s.otherWaysToSignIn__img} src={Google} alt="Google" />
          </a>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img className={s.otherWaysToSignIn__img} src={Facebook} alt="Facebook" />
          </a>
          <a className={s.otherWaysToSignIn__link} href="#">
            <img className={s.otherWaysToSignIn__img} src={Yandex} alt="Yandex" />
          </a>
        </div>
      </div>
    </div>
  );
}
