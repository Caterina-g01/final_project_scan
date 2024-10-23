import React from 'react'
import SearcingResultHeroSection from '../../components/SearcingResultsHeroSection/SearcingResultsHeroSection'
import SearcingResultsArticles from '../../components/SearcingResultsArticles/SearcingResultsArticles'
import SummarySection from '../../components/SummarySection/SummarySection'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function SearchResultPage() {
  return (
    <div>
      <Header/>
      <SearcingResultHeroSection/>
      <SummarySection/>
      <SearcingResultsArticles/>
      <Footer/>
    </div>
  )
}
