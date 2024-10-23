import React, { useState } from "react";
import Input from "../Input/Input";
import s from "./styles.module.scss";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Checkbox from "../Checkbox/Checkbox";
import classNames from "classnames";

export default function SearchForm() {
  const [inn, setInn] = useState("");
  const [numDocs, setNumDocs] = useState("");
  const [tone, setTone] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [checkboxes, setCheckboxes] = useState([
    { label: "Признак максимальной полноты", checked: false },
    { label: "Упоминания в бизнес-контексте", checked: false },
    { label: "Главная роль в публикации", checked: false },
    { label: "Публикации только с риск-факторами", checked: false },
    { label: "Включать технические новости рынков", checked: false },
    { label: "Включать анонсы и календари", checked: false },
    { label: "Включать сводки новостей", checked: false },
  ]);

  const [innError, setInnError] = useState("");
  const [numDocsError, setNumDocsError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleInnChange = (value) => {
    setInn(value);
    validateInn(value);
  };

  const validateInn = (value) => {
    const onlyNumbers = /^\d{10}$/;
    if (!value) {
      setInnError("Введите корректные данные");
    } else if (!onlyNumbers.test(value)) {
      setInnError("ИНН должен состоять из 10 цифр");
    } else {
      setInnError("");
    }
  };

  const handleNumDocsChange = (value) => {
    setNumDocs(value);
    validateNumDocs(value);
  };

  const validateNumDocs = (value) => {
    const numberPattern = /^\d+$/;
    const num = Number(value);

    if (!value) {
      setNumDocsError("Введите корректные данные");
    } else if (!numberPattern.test(value) || num < 0 || num > 1000) {
      setNumDocsError("Введите число в диапазоне от 0 до 1000");
    } else {
      setNumDocsError("");
    }
  };

  const handleToneSelect = (selectedTone) => setTone(selectedTone);

  const validateDates = (from, to) => {
    const today = new Date().toISOString().split("T")[0];
    if (!from || !to) {
      setDateError("Введите корректные данные");
    } else if (from > today || to > today) {
      setDateError("Дата не может быть в будущем");
    } else if (from > to) {
      setDateError("Дата начала не может быть позже даты конца");
    } else {
      setDateError("");
    }
  };

  const handleFromDateSelect = (date) => {
    setFromDate(date);
    validateDates(date, toDate);
  };

  const handleToDateSelect = (date) => {
    setToDate(date);
    validateDates(fromDate, date);
  };

  const handleCheckboxChange = (index, newChecked) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = newChecked;
    setCheckboxes(updatedCheckboxes);
  };

  const isFormValid = !innError && !numDocsError && !dateError && inn && numDocs && fromDate && toDate;

  return (
    <div className={s.searchForm__container}>
      <div className={s.searchForm__contentOne}>
        <div className={s.searchForm__inputs}>
          {/* Поле для ИНН */}
          <div className={s.searchForm__input__InnNum}>
            <p className={s.searchForm__input__title}>ИНН компании *</p>
            <div>
              <Input
                className={classNames(s.customInput, {
                  [s.inputError]: innError,
                })}
                placeholder="10 цифр"
                value={inn}
                onChange={(e) => handleInnChange(e.target.value)}
                type="text"
              />
              {innError && <span className={s.error}>{innError}</span>}
            </div>
          </div>

          {/* Поле для тональности */}
          <div className={s.searchForm__input__tone}>
            <p className={s.searchForm__input__title}>Тональность</p>
            <DropDown
              options={["Любая", "Негативная", "Позитивная"]}
              selectedValue={tone}
              onSelect={handleToneSelect}
              placeholder="Тональность"
              selectClassName={s.dropdown__select}
              shownClassName={s.dropdown__shown}
              dropDownContentClassName={s.dropdown__content}
            />
          </div>

          {/* Поле для количества документов */}
          <div className={s.searchForm__input__numDocs}>
            <p className={s.searchForm__input__title}>
              Количество документов в выдаче *
            </p>
            <div>
              <Input
                className={classNames(s.customInput, {
                  [s.inputError]: numDocsError,
                })}
                placeholder="От 0 до 1000"
                value={numDocs}
                onChange={(e) => handleNumDocsChange(e.target.value)}
                type="text"
              />
              {numDocsError && <span className={s.error}>{numDocsError}</span>}
            </div>
          </div>
        </div>

        {/* Чекбоксы */}
        <div className={s.searchForm__checkboxs}>
          {checkboxes.map((checkbox, index) => (
            <Checkbox
              key={index}
              label={checkbox.label}
              checked={checkbox.checked}
              onChange={(newChecked) => handleCheckboxChange(index, newChecked)}
            />
          ))}
        </div>
      </div>

      <div className={s.searchForm__contentTwo}>
        {/* Поля для диапазона дат */}
        <div className={s.searchForm__input__ranges}>
          <p className={s.searchForm__input__title}>Диапазон поиска *</p>
          <div className={s.searchForm__input__dates}>
            <DropDown
              isDatePicker
              selectedValue={fromDate}
              onSelect={handleFromDateSelect}
              placeholder="Дата начала"
              selectClassName={classNames(s.dropdown__selectDate, {
                [s.dropdownError]: dateError,
              })}
              shownClassName={s.dropdown__shownDate}
              dropDownContentClassName={s.dropdown__contentDate}
            />
            <DropDown
              isDatePicker
              selectedValue={toDate}
              onSelect={handleToDateSelect}
              placeholder="Дата конца"
              selectClassName={classNames(s.dropdown__selectDate, {
                [s.dropdownError]: dateError,
              })}
              shownClassName={s.dropdown__shownDate}
              dropDownContentClassName={s.dropdown__contentDate}
            />
          </div>
          {dateError && <span className={s.error}>{dateError}</span>}
        </div>

        {/* Кнопка поиска */}
        <div className={s.searchForm__btnBlock}>
          <Button
            className={classNames(s.searchForm__btn, { [s.disabled]: !isFormValid })}
            disabled={!isFormValid}
          >
            Поиск
          </Button>
          <span className={s.searchForm__required}>
            * Обязательные к заполнению поля
          </span>
        </div>
      </div>
    </div>
  );
}
