import React from 'react'
import s from './styles.module.scss'
import Placeholder from '../ui/Placeholder/Placeholder'
import Img from '../../assets/images/AutorizationImg.png'

export default function AutorizationSection() {
  return (
    <div className={s.autorizationSection__container}>
        <div className={s.autorizationSection__titleBlock}>
            <h1 className={s.autorizationSection__title}>Для оформления подписки 
            на тариф, необходимо авторизоваться</h1>
            <img className={s.autorizationSection__img} src={Img} alt="" />
        </div>
        <div className={s.autorizationSection__placeholderBlock}>
        <Placeholder className={s.autorizationSection__placeholder} />
        </div>
    </div>
  )
}
