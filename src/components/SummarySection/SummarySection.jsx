import React from "react";
import { useSelector } from "react-redux";
import s from "./styles.module.scss";
import SummarySliderContainer from "../SummarySliderContainer/SummarySliderContainer";
import { selectDocumentsCount } from "../../store/publicationsSlice";

export default function SummarySection() {
  const publicationsCount = useSelector(selectDocumentsCount);

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
