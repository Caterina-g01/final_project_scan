import React from "react";
import s from "./styles.module.scss";
import SearchImg from "../../assets/images/SearchImg.svg";
import SearchForm from "../ui/SearchForm/SearchForm";

export default function SearchSection() {
  return (
    <div className={s.searchSection__container}>
      <div className={s.searchSection__title}>
        Найдите необходимые данные в пару кликов.
      </div>
      <div className={s.searchSection__subTitle}>
        Задайте параметры поиска. <br />
        Чем больше заполните, тем точнее поиск
      </div>
      <div className={s.searchSection__content}>
        <SearchForm />
        <img
          className={s.searchSection__img}
          src={SearchImg}
          alt="иллюстрация"
        />
      </div>
    </div>
  );
}
