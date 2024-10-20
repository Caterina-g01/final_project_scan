import React from "react";
import s from "./styles.module.scss";
import Button from "../ui/Button/Button";
import HeroImg from "../../assets/images/HeroSectionPic.png";

export default function HeroSearcingService() {
  return (
    <div className={s.heroSearcingService__container}>
      <div className={s.heroSearcingService__content}>
        <h1 className={s.heroSearcingService__title}>
          сервис по поиску публикаций <br />о компании <br /> по его ИНН
        </h1>
        <div className={s.heroSearcingService__text}>
        Комплексный анализ публикаций, получение данных  <br />в формате PDF на электронную почту.
        </div>
        <Button className={s.heroSearcingService__btn}>
          Запросить данные
        </Button>
      </div>
      <img src={HeroImg} className={s.heroSearcingService__img}></img>
    </div>
  );
}
