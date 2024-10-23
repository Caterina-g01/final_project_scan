import React from 'react';
import s from './styles.module.scss';
import PropTypes from 'prop-types'; 
import SummarySlider from '../ui/sliders/SummarySlider/SummarySlider';

export default function SummarySliderContainer({ histogramData }) {
  const hasData = Array.isArray(histogramData) && histogramData.length > 0;

  return (
    <div className={s.summarySliderContainer__container}>
      <ul className={s.summarySliderContainer__values}>
        <li>Период</li>
        <li>Всего</li>
        <li>Риски</li>
      </ul>
      {hasData ? (
        <SummarySlider summaryData={histogramData} />
      ) : (
        <div className={s.noDataMessage}>Нет данных для отображения</div>
      )}
    </div>
  );
}

SummarySliderContainer.propTypes = {
  histogramData: PropTypes.array, 
};

SummarySliderContainer.defaultProps = {
  histogramData: [],
};