import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import s from './styles.module.scss';
import WhyUsCard from "../../WhyUsCard/WhyUsCard";
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
  const { className, style, onClick} = props;
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
export default function AdvantagesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "1px",
    responsive: [
      {
        breakpoint: 1360, 
        settings: {
          slidesToShow: 2, 
          centerPadding: "1px",
        }
      },
      {
        breakpoint: 940, 
        settings: {
          slidesToShow: 1, 
          centerPadding: "1px",
        }
      },
    ]
  };
  return (
    <div className={s.advantagesSlider__container}>
    <Slider {...settings}>
      
      <div><WhyUsCard 
        imageSrc="/src/assets/images/icons/WhyUs1.svg" 
        description="Высокая и оперативная скорость обработки заявки" 
      /></div>
    <div> <WhyUsCard 
        imageSrc="/src/assets/images/icons/WhyUs2.svg" 
        description="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" 
      /></div>
     <div> <WhyUsCard 
        imageSrc="/src/assets/images/icons/WhyUs3.svg" 
        description="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" 
      /></div>
     
  
    </Slider>
  </div>
  );
}
