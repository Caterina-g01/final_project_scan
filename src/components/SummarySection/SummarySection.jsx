import React from "react";
import { useSelector } from "react-redux"; // Импортируйте useSelector из react-redux
import s from "./styles.module.scss";
import SummarySliderContainer from "../SummarySliderContainer/SummarySliderContainer";

export default function SummarySection() {
  const publicationsCount = useSelector((state) => state.publications.count);

  return (
    <div className={s.summarySection__container}>
      <div className={s.summarySection__title}>Общая сводка</div>
      <div className={s.summarySection__info}>
        Найдено <span>{publicationsCount}</span> вариантов
      </div>
      <SummarySliderContainer />
    </div>
  );
}
