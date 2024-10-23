import React from 'react'
import s from './styles.module.scss'
import SummarySlider from '../ui/sliders/SummarySlider/SummarySlider'

export default function SummarySliderContainer() {
  return (
    <div className={s.summarySliderContainer__container}>
      
        <ul className={s.summarySliderContainer__values}>
            <li>Период</li>
            <li>Всего</li>
            <li>Риски</li>
        </ul>
      
        <SummarySlider />
       
        </div>
  )
}
