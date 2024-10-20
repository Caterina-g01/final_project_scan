import React from 'react';
import s from './styles.module.scss';
import PricingPlansCard from '../ui/PricingPlansCard/PricingPlansCard';
import ImgOne from '../../assets/images/icons/PricePlans1.svg';
import ImgTwo from '../../assets/images/icons/PricePlans2.svg';
import ImgThree from '../../assets/images/icons/PricePlans3.svg';

export default function PricingPlans() {
  const plans = [
    {
      imageSrc: ImgOne,
      cardTitle: 'Begginer',
      titleDescription: 'Для небольшого исследования',
      price: '799 ₽',
      oldPrice: '1200 ₽',
      priceDescription: 'или 150 ₽/мес. при рассрочке на 24 мес.',
      descriptionTitle: 'В тариф входит:',
      description: [
        'Безлимитная история запросов',
        'Безопасная сделка',
        'Поддержка 24/7',
      ],
      buttonText: 'Подробнее',
      containerBorderColor: '#FFB64F',
      backgroundColor: '#FFB64F',
      color: '#000000',
    },
    {
      imageSrc: ImgTwo,
      cardTitle: 'Pro',
      titleDescription: 'Для HR и фрилансеров',
      price: '1 299 ₽',
      oldPrice: '2 600 ₽',
      priceDescription: 'или 279 ₽/мес. при рассрочке на 24 мес.',
      descriptionTitle: 'В тариф входит:',
      description: [
        'Все пункты тарифа Beginner',
        'Экспорт истории',
        'Рекомендации по приоритетам',

      ],
      buttonText: 'Подробнее',
      containerBorderColor: '#7CE3E1',
      backgroundColor: '#7CE3E1',
      color: '#000000',
    },
    {
      imageSrc: ImgThree,
      cardTitle: 'Enterprise',
      titleDescription: 'Для корпоративных клиентов',
      price: '2 379 ₽',
      oldPrice: '3 700 ₽',
      descriptionTitle: 'В тариф входит:',
      description: [
        'Все пункты тарифа Pro',
        'Безлимитное количество запросов',
        'Приоритетная поддержка',
      ],
      buttonText: 'Подробнее',
      containerBorderColor: '#000000',
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
  ];

  return (
    <div className={s.pricingPlans__container}>
      <h1 className={s.pricingPlans__title}>наши Тарифы</h1>
      <div className={s.pricingPlans__content}>
      {plans.map((plan, index) => (
        <PricingPlansCard
          key={index}
          imageSrc={plan.imageSrc}
          cardTitle={plan.cardTitle}
          titleDescription={plan.titleDescription}
          price={plan.price}
          oldPrice={plan.oldPrice}
          priceDescription={plan.priceDescription}
          descriptionTitle={plan.descriptionTitle}
          description={plan.description}
          buttonText={plan.buttonText}
          containerBorderColor={plan.containerBorderColor}
    backgroundColor={plan.backgroundColor} 
    color={plan.color}

        />
        
      ))}
      </div>
    </div>
  );
}


