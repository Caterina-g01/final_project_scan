import React from 'react'
import s from './styles.module.scss';


export default function WhyUsCard({ imageSrc,  description }) {
    return (
      <div className={s.whyUsCard__container}>
        <img src={imageSrc} alt={"icon"} className={s.whyUsCard__image} />
        <p className={s.whyUsCard__description}>{description}</p>
      </div>
    );
  }
