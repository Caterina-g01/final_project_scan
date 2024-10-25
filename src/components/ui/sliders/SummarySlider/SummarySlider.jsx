import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import s from "./styles.module.scss";
import ArrowPrev from "../../../../assets/images/icons/arrow-left.png";
import ArrowNext from "../../../../assets/images/icons/arrow-right.png";
import SummarySliderSlide from "../../SummarySliderSlide/SummarySliderSlide";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={ArrowNext} alt="Next" className={s.arrowNext} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={ArrowPrev} alt="Prev" className={s.arrowPrev} />
    </div>
  );
}

export default function SummarySlider() {
  const summaryData = JSON.parse(localStorage.getItem("summaryData")) || {
    data: [],
  };

  if (!Array.isArray(summaryData.data) || summaryData.data.length === 0) {
    return <div>No data available</div>;
  }

  const formattedData = summaryData.data.flatMap((histogram) =>
    histogram.data.map((item) => ({
      date: new Date(item.date).toLocaleDateString().replace("/", "."),
      totalDocuments:
        histogram.histogramType === "totalDocuments" ? item.value : 0,
      riskFactors: histogram.histogramType === "riskFactors" ? item.value : 0,
    }))
  );
  const filteredHistograms = formattedData.filter(
    (item) => item.totalDocuments !== 0 || item.riskFactors !== 0
  );
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log(filteredHistograms);
  return (
    <div className={s.advantagesSlider__container}>
      <Slider {...settings}>
        {filteredHistograms.map((item, index) => (
          <SummarySliderSlide
            key={index}
            date={item.date}
            totalDocuments={item.totalDocuments}
            riskFactors={item.riskFactors}
          />
        ))}
      </Slider>
    </div>
  );
}
