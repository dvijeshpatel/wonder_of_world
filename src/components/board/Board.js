import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import _map from 'lodash/map';
import _partial from 'lodash/partial';
// import _findIndex from 'lodash/findIndex';
import _includes from 'lodash/includes';


import './board.css';

const renderWonder = (likedCards, onCardLike, onCardDisLike, wonder) => {
  const isCardLiked = _includes(likedCards, wonder.id);
  return (<Card wonder={wonder} isLiked={isCardLiked} onCardLike={onCardLike} onCardDisLike={onCardDisLike}/>);
};

const Board = (props) => {
  const {wondersOfTheWorld, likedCards, onCardLike, onCardDisLike} = props;
  return (
    <div className="row board">
      {_map(wondersOfTheWorld, _partial(renderWonder,likedCards, onCardLike, onCardDisLike))}
    </div>
  );
};

Board.defaultPropTypes ={
  wondersOfTheWorld: [],
  likedCards:[],
};

Board.propTypes = {
  wondersOfTheWorld: PropTypes.array,
  likedCards: PropTypes.array,
  onCardLike: PropTypes.func,
  onCardDisLike: PropTypes.func,
};

export default  Board;