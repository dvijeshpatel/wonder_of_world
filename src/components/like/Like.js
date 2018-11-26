import React from 'react';
import PropTypes from 'prop-types';
import './like.css';

const Like = (props) => {
  const { className, onClick, likeCount, isLiked }= props;
  const totalLikeCount = likeCount + (isLiked ? 1 : 0);
  return (<div className={`like ${className}`}>
    <i className="fab fa-gratipay like__icon" style={{color: isLiked ? 'green' : 'grey'}} onClick={onClick} ></i>
    <div className="like__count">
      {totalLikeCount }
    </div>
  </div>);
};

Like.propTypes ={
  onClick: PropTypes.func,
  className: PropTypes.string,
  likeCount: PropTypes.number,
  isLiked: PropTypes.bool,
};

Like.defaultProps= {
  likeCount: 0,
  onClick: PropTypes.func,
  isLiked: false,
};

export default  Like;