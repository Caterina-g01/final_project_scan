import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../Input/Input";
import s from "./styles.module.scss";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Checkbox from "../Checkbox/Checkbox";
import classNames from "classnames";
import { getSummary } from "../../../requests/publications";

export default function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inn, setInn] = useState("");
  const [numDocs, setNumDocs] = useState("");
  const [tone, setTone] = useState("Любая");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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

  const validateDates = (start, end) => {
    const today = new Date().toISOString().split("T")[0];
    if (!start || !end) {
      setDateError("Введите корректные данные");
    } else if (start > today || end > today) {
      setDateError("Дата не может быть в будущем");
    } else if (start > end) {
      setDateError("Дата начала не может быть позже даты конца");
    } else {
      setDateError("");
    }
  };

  const handleStartDateSelect = (date) => {
    setStartDate(date);
    validateDates(date, endDate);
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
    validateDates(startDate, date);
  };

  const handleCheckboxChange = (index, newChecked) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = newChecked;
    setCheckboxes(updatedCheckboxes);
  };

  const isFormValid =
    !innError &&
    !numDocsError &&
    !dateError &&
    inn &&
    numDocs &&
    startDate &&
    endDate;

  const handleSearch = async () => {
    if (isFormValid) {
      const additionalFilters = checkboxes
        .filter((c) => c.checked)
        .map((c) => c.label);

      try {
        await dispatch(
          getSummary(
            inn,
            tone === "Позитивная"
              ? "positive"
              : tone === "Негативная"
              ? "negative"
              : "any",
            Number(numDocs),
            startDate,
            endDate,
            ...additionalFilters
          )
        );
        navigate("/results");
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    } else {
      console.log("Форма не валидна");
    }
  };

  return (
    <div className={s.searchForm__container}>
      <div className={s.searchForm__contentOne}>
        <div className={s.searchForm__inputs}>
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
        <div className={s.searchForm__input__ranges}>
          <p className={s.searchForm__input__title}>Диапазон поиска *</p>
          <div className={s.searchForm__input__dates}>
            <DropDown
              isDatePicker
              selectedValue={startDate}
              onSelect={handleStartDateSelect}
              placeholder="Дата начала"
              selectClassName={classNames(s.dropdown__selectDate, {
                [s.dropdownError]: dateError,
              })}
              shownClassName={s.dropdown__shownDate}
              dropDownContentClassName={s.dropdown__contentDate}
            />
            <DropDown
              isDatePicker
              selectedValue={endDate}
              onSelect={handleEndDateSelect}
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

        <div className={s.searchForm__btnBlock}>
          <Button
            className={classNames(s.searchForm__btn, {
              [s.disabled]: !isFormValid,
            })}
            disabled={!isFormValid}
            onClick={handleSearch}
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
