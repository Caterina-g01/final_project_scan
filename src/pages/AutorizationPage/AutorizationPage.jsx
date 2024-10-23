import React from 'react'
import s from './styles.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AutorizationSection from '../../components/AutorizationSection/AutorizationSection'


export default function AutorizationPage() {
  return (
    <div>
      <Header/>
      <AutorizationSection/>
      <Footer/>
    </div>
  ) 
}
