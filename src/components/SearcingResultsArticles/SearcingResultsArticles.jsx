import React, { useState, useEffect } from "react";
import s from "./styles.module.scss";
import DocumentCard from "../ui/DocumentCard/DocumentCard";
import Button from "../ui/Button/Button";

export default function SearchingResultsArticles() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(2);

  const getDocumentsData = () => {
    const data = localStorage.getItem("documentsData");
    return data ? JSON.parse(data) : [];
  };

  useEffect(() => {
    const allDocuments = getDocumentsData();
    setVisibleCards(allDocuments.slice(0, cardsToShow));
  }, [cardsToShow]);

  const handleShowMore = () => {
    setCardsToShow((prev) => prev + 4);
  };

  return (
    <div className={s.searcingResultsArticles__container}>
      <div className={s.searcingResultsArticles__title}>Список документов</div>
      <div className={s.searcingResultsArticles__content}>
        {visibleCards.map((doc) => (
          <DocumentCard
            key={doc.id}
            date={doc.issueDate}
            source={doc.source?.name || "Источник не указан"}
            title={doc.title?.text || "Без заголовка"}
            tag={doc.tag || "Без метки"}
            content={doc.content?.markup || "Нет контента"}
            wordCount={doc.wordCount}
            image={doc.image}
          />
        ))}
      </div>
      {visibleCards.length < getDocumentsData().length && (
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
