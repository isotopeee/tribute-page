import React from 'react';
import PropTypes from 'prop-types';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = props => {
  const { data } = props;
  return (
    <div className="timeline">
      {Object.values(data).map(({ id, title, date, description, image }) => (
        <TimelineItem
          key={id}
          id={id}
          title={title}
          date={date}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

Timeline.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Timeline;
