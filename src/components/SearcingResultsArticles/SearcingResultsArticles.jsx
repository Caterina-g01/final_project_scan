import React, { useState } from "react";
import s from "./styles.module.scss";
import DocumentCard from "../ui/DocumentCard/DocumentCard";
import Button from "../ui/Button/Button";
import { useSelector } from "react-redux";
import Img from "../../assets/images/skillfactory.png";

export default function SearchingResultsArticles() {
  const [cardsToShow, setCardsToShow] = useState(2);
  const documents = useSelector((state) => state.publications.documents) || [];
  const allDocuments = documents.length
    ? documents
    : JSON.parse(localStorage.getItem("documentsData")) || [];

  const handleShowMore = () => {
    setCardsToShow((prev) => prev + 2);
  };

  return (
    <div className={s.searcingResultsArticles__container}>
      <div className={s.searcingResultsArticles__title}>Список документов</div>
      <div className={s.searcingResultsArticles__content}>
        {allDocuments.slice(0, cardsToShow).map((item) => (
          <DocumentCard
            key={item.id}
            date={item.issueDate}
            source={item.nameSource || "Источник не указан"}
            title={item.title || "Без заголовка"}
            tag={item.tag || "Без метки"}
            content={item.content || "Нет контента"}
            wordCount={item.wordCount}
            image={item.image || Img}
            url={item.redirectSourceUrl}
          />
        ))}
      </div>
      {cardsToShow < allDocuments.length && (
        <div className={s.searcingResultsArticles__showMoreBtnContainer}>
          <Button
            className={s.searcingResultsArticles__showMoreBtn}
            onClick={handleShowMore}
          >
            Показать больше
          </Button>
        </div>
      )}
    </div>
  );
}
