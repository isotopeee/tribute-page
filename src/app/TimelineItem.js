import React from 'react';
import PropTypes from 'prop-types';
import './TimelineItem.css';

const TimelineItem = props => {
  const { date, description, image, title } = props;

  return (
    <div className="timeline-item" data-text={title}>
      <div className="timeline__content">
        <img src={image} alt={title} className="timeline__img" />
        <h2 className="timeline__content-date">{date}</h2>
        <p className="timeline__content-desc">{description}</p>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TimelineItem;
