import React, { useState } from 'react';
import s from './styles.module.scss';
import CardNews from '../ui/CardNews/CardNews';
import newsCardData  from '../../data/NewsCardData/NewsCardData';
import Button from '../ui/Button/Button';

export default function SearcingResultsArticles() {
  const [visibleCards, setVisibleCards] = useState([]);

  const getRandomCards = (num) => {
    const shuffled = [...newsCardData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  React.useEffect(() => {
    setVisibleCards(getRandomCards(2));
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prev) => [...prev, ...getRandomCards(4)]);
  };

  return (
    <div className={s.searcingResultsArticles__container}>
    <div className={s.searcingResultsArticles__title}>Список документов</div>
    <div className={s.searcingResultsArticles__content}>
      {visibleCards.map((card) => (
        <CardNews
          key={card.id}
          date={card.date}
          source={card.source}
          title={card.title}
          tag={card.tag}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
    <div className={s.searcingResultsArticles__showMoreBtnContainer}>
    <Button className={s.searcingResultsArticles__showMoreBtn} onClick={handleShowMore}>
        Показать больше
      </Button>
      </div>
    </div>
  );
}
