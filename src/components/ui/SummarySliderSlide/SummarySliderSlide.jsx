import React from "react";
import s from "./styles.module.scss";

export default function SummarySliderSlide({
  date,
  totalDocuments,
  riskFactors,
}) {
  console.log({date: date, totalDocuments: totalDocuments});
  return (
    <div className={s.summarySliderSlide__container}>
      <div>{date}</div>
      <div>{totalDocuments}</div>
      <div>{riskFactors}</div>
    </div>
  );
}
