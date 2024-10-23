import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import SummarySliderContainer from "../SummarySliderContainer/SummarySliderContainer";
import { fetchHistogramData } from "../../data/DataService/DataService";

export default function SummarySection({ searchParams }) {
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const tokenExpire = localStorage.getItem("tokenExpire");

      if (!accessToken || new Date(tokenExpire) < new Date()) {
        console.log("Токен истёк, требуется повторная авторизация");
        setError("Токен истёк, требуется повторная авторизация");
        setLoading(false);
        return;
      }

      try {
        const response = await fetchHistogramData(searchParams);
        const totalDocumentsData = response.data.find(
          (histogram) => histogram.histogramType === "totalDocuments"
        );

        if (totalDocumentsData) {
          const total = totalDocumentsData.data.reduce(
            (acc, curr) => acc + curr.value,
            0
          );
          setTotalDocuments(total);
        }
      } catch (err) {
        console.error("Ошибка при получении данных гистограммы:", err);
        setError("Ошибка при загрузке данных: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [searchParams]);

  return (
    <div className={s.summarySection__container}>
      {loading ? (
        <div>Загрузка...</div>
      ) : error ? (
        <div className={s.error}>{error}</div>
      ) : (
        <div className={s.summarySection__info}>
          Найдено {totalDocuments} вариантов
        </div>
      )}
      <div className={s.summarySection__title}>Общая сводка</div>
      <SummarySliderContainer />
    </div>
  );
}
