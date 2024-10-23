import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./styles.module.scss";

export default function DropDown({
  options,
  isDatePicker,
  selectedValue,
  onSelect,
  placeholder,
  selectClassName,
  shownClassName,
  dropDownContentClassName,
  hasError,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue || "");
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(s.select, selectClassName, { [s.error]: hasError })}
      ref={dropDownRef}
    >
      <div
        className={classNames(s.shown, shownClassName)}
        onClick={toggleDropDown}
      >
        {selectedOption || placeholder}
        <span className={s.arrowIcon}>▼</span>
      </div>

      {isOpen && (
        <div
          className={classNames(s.dropDownContent, dropDownContentClassName)}
        >
          {!isDatePicker ? (
            <div className={s.options}>
              {options.map((option, index) => (
                <div
                  key={index}
                  className={s.option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <input
              type="date"
              className={s.datePicker}
              onChange={(e) => handleOptionClick(e.target.value)}
              value={selectedOption}
            />
          )}
        </div>
      )}
    </div>
  );
}

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  isDatePicker: PropTypes.bool,
  selectedValue: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectClassName: PropTypes.string,
  shownClassName: PropTypes.string,
  dropDownContentClassName: PropTypes.string,
  hasError: PropTypes.bool,
};

DropDown.defaultProps = {
  options: [],
  isDatePicker: false,
  placeholder: "Выберите...",
  selectClassName: "",
  shownClassName: "",
  dropDownContentClassName: "",
  hasError: false,
};
