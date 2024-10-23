import React from 'react';
import s from './styles.module.scss';
import Button from '../Button/Button';

export default function CardNews({ date, source, title, tag, description, image }) {
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length; 
  };

  const descriptionLines = description.split('\n'); 
  const numberOfWords = countWords(description);

  return (
    <div className={s.cardNews__container}>
      <div className={s.cardNews__dateAndSource}>
        <p className={s.cardNews__date}>{date}</p>
        <p className={s.cardNews__source}>{source}</p>
      </div>
      <div className={s.cardNews__title}>{title}</div>
      <div className={s.cardNews__tag}>{tag}</div>
      <div className={s.cardNews__imgBlock}>
        <img className={s.cardNews__img} src={image} alt={title} />
      </div>
      <div className={s.cardNews__description}>
        {descriptionLines.map((line, index) => (
          <React.Fragment key={index}>
            <p>{line}</p>
            {index < descriptionLines.length - 1 && <br />} 
          </React.Fragment>
        ))}
      </div>
      
      <div className={s.cardNews__btnAndNumWords}>
        <Button className={s.cardNews__btn}>Читать в источнике</Button>
        <div className={s.cardNews__numWords}>{numberOfWords} слова</div> 
      </div>
    </div>
  );
}
