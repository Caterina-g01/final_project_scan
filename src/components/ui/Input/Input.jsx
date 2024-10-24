import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./styles.module.scss";

export default function Input({
  className = "", // Значение по умолчанию
  placeholder = "Введите текст", // Значение по умолчанию
  value = "", // Значение по умолчанию
  onChange,
  type = "text", // Значение по умолчанию
}) {
  return (
    <div className={s.input__container}>
      <input
        className={classNames(s.input, className)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
