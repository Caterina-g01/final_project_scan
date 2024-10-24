import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./styles.module.scss";
import Button from "../../ui/Button/Button";
import HeroImg from "../../../assets/images/HeroSectionPic.svg";
import { useSelector } from "react-redux";

export default function HeroSearchingService() {
  const isAuthenticated = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/search");
  };

  return (
    <div className={s.heroSearcingService__container}>
      <div className={s.heroSearcingService__content}>
        <h1 className={s.heroSearcingService__title}>
          сервис по поиску публикаций <br />о компании <br /> по его ИНН
        </h1>
        <div className={s.heroSearcingService__text}>
          Комплексный анализ публикаций, получение данных <br />в формате PDF на
          электронную почту.
        </div>
        {isAuthenticated && (
          <Button
            className={s.heroSearcingService__btn}
            onClick={handleButtonClick}
          >
            Запросить данные
          </Button>
        )}
      </div>
      <img src={HeroImg} className={s.heroSearcingService__img}></img>
    </div>
  );
}
