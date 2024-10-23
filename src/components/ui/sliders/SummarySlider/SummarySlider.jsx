import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
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

export default function SummarySlider({ summaryData }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1389,
        settings: {
          slidesToShow: 6,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 864,
        settings: {
          slidesToShow: 3,
          centerPadding: "1px",
        },
      },
    ],
  };

  return (
    <div className={s.summarySlider__container}>
      <Slider {...settings}>
        {summaryData.map((item, index) => (
          <SummarySliderSlide 
            key={index} 
            period={item.period} 
            total={item.total} 
            risks={item.risks} 
          />
        ))}
      </Slider>
    </div>
  );
}
