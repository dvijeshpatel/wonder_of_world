import React from 'react';
import './card.css';
import Like from '../like';
import PropTypes from 'prop-types';

import _isEmpty from 'lodash/isEmpty';

const Ratings = (props) => {
  const MAX_RATING = 5;
  const {ratings} = props;
  let HTML = <div>Rating</div>;
  const ratingStars = []
  for(let i=0;i<ratings;i++){
    ratingStars.push(<span className="far fa-star rating__checked" ></span>);
  }
  for(let i=0;i<MAX_RATING-ratings;i++){
    ratingStars.push(<span className="far fa-star"></span>);
  }
  return (<div>
    Rating
    {ratingStars}
  </div>);
}

export class Card extends React.PureComponent {
  constructor(props){
    super(props);
  }
  onClickLikeButton = () => {
    const {wonder, isLiked} = this.props;
    if(!isLiked) {
      this.props.onCardLike(wonder.id);
    } else {
      this.props.onCardDisLike(wonder.id);
    }
  }
  render() {
    const { wonder, isLiked} = this.props;
    if (_isEmpty(wonder))
      return null;
    return (
      <div className="col-sm-6 card__container">
        <div className=" card">
          <div className="card__front">
            <img className="card__image" src={wonder.imageURL} />
            <div className="card__footer">
              <div className="card__rating">
                <Ratings ratings={wonder.ratings} />
              </div>
              <div className="card__title">
                {wonder.place}
              </div>
            </div>
          </div>
          <div className="card__back">
            <Like className={'card__like'} isLiked={isLiked} onClick={this.onClickLikeButton} likeCount={wonder.likes}/>
            <h3 className="card__back__title">{wonder.place}</h3>
            <p className="card__back__description">
              {wonder.description || 'Not any description found'}
            </p>
          </div>
        </div>
      </div>);
  }
};


Card.defaultPropTypes ={
  wonder: {},
  isLiked: false,
};

Card.propTypes = {
  wonder: PropTypes.object,
  isLiked: PropTypes.bool,
  onCardLike: PropTypes.func,
  onCardDisLike: PropTypes.func,
};

export default  Card;