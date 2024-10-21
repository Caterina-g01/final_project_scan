import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles.module.scss';
import Button from '../Button/Button';
import SignInWindow from '../../AutorizationWindows/SignInWindow/SignInWindow';

export default function Placeholder({ className }) {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className={classNames(s.placeholder__container, className)}>
      <div className={s.placeholder__btnsContainer} >
        <Button className={s.placeholder__btnSignIn} onClick={handleSignInClick}>
          Войти
        </Button>
        <Button className={s.placeholder__btnSignUp}>Зарегистрироваться</Button>
      </div>
      {showSignIn && <SignInWindow />}
    </div>
  );
}

Placeholder.propTypes = {
  className: PropTypes.string,
};

Placeholder.defaultProps = {
  className: '',
};
