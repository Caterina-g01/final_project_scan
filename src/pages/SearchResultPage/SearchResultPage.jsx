import React from "react";
import { useSelector } from "react-redux";
import SearcingResultHeroSection from "../../components/SearcingResultsHeroSection/SearcingResultsHeroSection";
import SearcingResultsArticles from "../../components/SearcingResultsArticles/SearcingResultsArticles";
import SummarySection from "../../components/SummarySection/SummarySection";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import { selectIsFetching } from "../../store/publicationsSlice";

export default function SearchResultPage() {
  const isFetching = useSelector(selectIsFetching);

  return (
    <div>
      <SearcingResultHeroSection />
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <SummarySection />
          <SearcingResultsArticles />
        </>
      )}
    </div>
  );
}
