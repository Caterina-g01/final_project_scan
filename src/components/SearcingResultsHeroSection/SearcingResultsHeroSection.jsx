import React from 'react'
import s from './styles.module.scss'
import Img from '../../assets/images/SearchingResultImg.svg'

export default function SearcingResultsHeroSection() {
  return (
    <div className={s.searcingResultsHeroSection__container}>
      <div className={s.searcingResultsHeroSection__titleBlock}>
      <div className={s.searcingResultsHeroSection__title}>Ищем. Скоро <br /> будут результаты</div>
      <div className={s.searcingResultsHeroSection__titleText}>Поиск может занять некоторое время,<br /> просим сохранять терпение.</div>
      </div>
      <img className={s.searcingResultsHeroSection__img} src={Img} alt="Иллюстрация" />
    </div>
  )
}
