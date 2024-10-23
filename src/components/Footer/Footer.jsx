import React from 'react'
import s from './styles.module.scss'
import Logo from '../../assets/images/icons/LogoFooter.svg'
export default function Footer() {
  return (
    <footer className={s.container}>
      <div className={s.content}>
      <div className={s.logo}>
        <img className={s.logoImg} src={Logo} alt="logo" />
      </div>
      <div className={s.footerInfo}>
        <ul className={s.footerOrgInfo}>
          <li className={s.footerOrgInfo__item}>г. Москва, Цветной б-р, 40</li>
          <li className={s.footerOrgInfo__item}>+7 495 771 21 11</li>
          <li className={s.footerOrgInfo__item}>info@skan.ru</li>
        </ul>
        <div className={s.footerInfo__copyright}>Copyright. 2022</div>
      </div>
      </div>
    </footer>
  )
}
