import React from "react";
import s from "./styles.module.scss";
import SearchImg from "../../assets/images/SearchImg.png";
import SearchForm from "../ui/SearchForm/SearchForm";
import SearchImg2 from "../../assets/images/SearchSmallImgTwo.svg";
import SearchImg3 from "../../assets/images/SearchSmallImgOne.svg";

export default function SearchSection() {
  return (
    <div className={s.searchSection__container}>
      <img className={s.searchSection__imgOne} src={SearchImg2} alt="" />
      <img className={s.searchSection__imgTwo} src={SearchImg3} alt="" />
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
