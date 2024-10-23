import React from 'react'
import SearcingResultHeroSection from '../../components/SearcingResultsHeroSection/SearcingResultsHeroSection'
import SearcingResultsArticles from '../../components/SearcingResultsArticles/SearcingResultsArticles'
import SummarySection from '../../components/SummarySection/SummarySection'

export default function SearchResultPage() {
  return (
    <div>
      <SearcingResultHeroSection/>
      <SummarySection/>
      <SearcingResultsArticles/>
    </div>
  )
}
