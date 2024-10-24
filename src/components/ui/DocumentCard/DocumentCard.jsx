import React from "react";
import s from "./styles.module.scss";
import Button from "../Button/Button";

const DocumentCard = ({
  date,
  source,
  title,
  tag,
  content,
  wordCount,
  image,
}) => {
  return (
    <div className={s.cardNews__container}>
      <div className={s.cardNews__dateAndSource}>
        <p className={s.cardNews__date}>{date}</p>
        <p className={s.cardNews__source}>
          {source?.name || "Источник не указан"}
        </p>
      </div>
      <div className={s.cardNews__title}>{title}</div>
      <div className={s.cardNews__tag}>{tag}</div>
      {image && (
        <div className={s.cardNews__imgBlock}>
          <img className={s.cardNews__img} src={image} alt={title} />
        </div>
      )}
      <div className={s.cardNews__description}>{content}</div>
      <div className={s.cardNews__btnAndNumWords}>
        <Button className={s.cardNews__btn}>Читать в источнике</Button>
        <div className={s.cardNews__numWords}>{wordCount} слова</div>
      </div>
    </div>
  );
};

export default DocumentCard;
