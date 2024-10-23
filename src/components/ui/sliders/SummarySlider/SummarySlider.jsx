import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import s from "./styles.module.scss";
import ArrowPrev from "../../../../assets/images/icons/arrow-left.png";
import ArrowNext from "../../../../assets/images/icons/arrow-right.png";

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
    <div className={s.advantagesSlider__container}>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </Slider>
    </div>
  );
}
