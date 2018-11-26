import React from 'react';
import PropTypes from 'prop-types';

import './contentSummary.css';

const ContentSummary = (props) => {
  const {totalLikes, totalHits} = props;
  return (
    <div className="col-sm-4 contentSummary">
      {`Total Likes: `}
      <div className="summaryCount">{totalLikes}</div>
      {`  API Hits: `}
      <div className="summaryCount">{totalHits}</div>
    </div>
  )
};

ContentSummary.propTypes = {
  totalLikes: PropTypes.number,
  totalHits: PropTypes.number,
};

ContentSummary.defaultProps = {
  totalLikes: 0,
  totalHits: 0,
};

export default ContentSummary;