import React from 'react'
import s from './styles.module.scss'
import SummarySliderContainer from '../SummarySliderContainer/SummarySliderContainer'

export default function SummarySection() {
  return (
    <div className={s.summarySection__container}>
      <div className={s.summarySection__title}>Общая сводка</div>
      <SummarySliderContainer />
    </div>
  )
}
