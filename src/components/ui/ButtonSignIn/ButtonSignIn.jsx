import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function ButtonSignIn({
  className = "",
  onClick,
  text = "Войти",
}) {
  return (
    <Link to="/auth">
      <button
        className={classNames(s.buttonSignIn, className)}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
}

ButtonSignIn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};
