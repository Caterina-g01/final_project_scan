import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import Button from '../Button/Button';

export default function PricingPlansCard({ 
  imageSrc, 
  titleDescription, 
  price, 
  oldPrice, 
  cardTitle, 
  priceDescription, 
  descriptionTitle, 
  description, 
  buttonText,
  containerBorderColor,
  backgroundColor, 
  color,
  isActive, 
}) {
  return (
    <div 
      className={`${s.container} ${isActive ? s.active : ''}`} 
      style={{ borderColor: containerBorderColor }}
    >
      <div className={s.title__container} style={{ backgroundColor }}>
        <div className={s.cardTitle__container} style={{ color }}>
          <h3 className={s.cardTitle}>{cardTitle}</h3>
          <p className={s.titleDescription} style={{ color }}>{titleDescription}</p>
        </div>
        <img src={imageSrc} alt={cardTitle} className={s.image} />
      </div>
      
      <div className={s.rateDescription}>
        <div className={s.price__container}>
          <p className={s.price}>{price}</p>
          <p className={s.oldPrice}>{oldPrice}</p>
        </div>
        <p className={s.priceDescription}>{priceDescription}</p>
        <p className={s.descriptionTitle}>{descriptionTitle}</p>
        
        <ul className={s.description}>
          {Array.isArray(description) && description.map((item, index) => (
            <li key={index} className={s.descriptionItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={s.button__container}>
      <Button className={`${s.cardButton} ${isActive ? s.activeBtn : ''}`}>
          {isActive ? 'Перейти в личный кабинет' : buttonText}
        </Button>
      </div>
    </div>
  );
}

PricingPlansCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  priceDescription: PropTypes.string.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  containerBorderColor: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string.isRequired, 
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
