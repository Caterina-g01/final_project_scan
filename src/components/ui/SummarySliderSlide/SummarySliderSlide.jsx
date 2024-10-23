import React from 'react';
import PropTypes from 'prop-types';

const SummarySliderSlide = ({ period, total, risks, attributes }) => {

  const tags = [];
  if (attributes.isTechNews) {
    tags.push('Технические новости');
  }
  if (attributes.isAnnouncement) {
    tags.push('Анонсы и события');
  }
  if (attributes.isDigest) {
    tags.push('Сводки новостей');
  }

  return (
    <div className="slide">
      <h3>Период: {period}</h3>
      <p>Всего публикаций: {total}</p>
      <p>Риски: {risks}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

SummarySliderSlide.propTypes = {
  period: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  risks: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    isTechNews: PropTypes.bool.isRequired,
    isAnnouncement: PropTypes.bool.isRequired,
    isDigest: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SummarySliderSlide;
