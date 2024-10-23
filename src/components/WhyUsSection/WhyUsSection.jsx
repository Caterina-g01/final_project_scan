import React from 'react'
import AdvantagesSlider from '../ui/sliders/AdvantagesSlider/AdvantagesSlider'
import s from './styles.module.scss'
import ImgWhy from '../../assets/images/WhyUsDesctop.svg'

export default function WhyUsSection() {
  return (
    <div className={s.whyUsSection__container}>
      <h1 className={s.whyUsSection__title}>Почему именно мы</h1>
      <AdvantagesSlider />
      <div className={s.whyUsSection__imgContainer}>
      </div>
    </div>
  )
}
