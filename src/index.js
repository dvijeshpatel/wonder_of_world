import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from './components/header';
import Board from './components/board';

import _filter from 'lodash/filter';
import _find from 'lodash/find';
import _isEmpty from 'lodash/isEmpty';
import _lowerCase from 'lodash/lowerCase';
import _reduce from 'lodash/reduce';
import _sortBy from 'lodash/sortBy';
import _reverse from 'lodash/reverse';

import 'bootstrap/dist/css/bootstrap.min.css';

import { getWondersOfTheWorld } from './services/apiService';


function init() {
  if (!localStorage.apiHitCount) {
    localStorage.apiHitCount = JSON.stringify(0);
  }
}
class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      likedCards: [],
      filteredWondersOfTheWorld:_reverse( _sortBy(this.props.wondersOfTheWorld, _lowerCase('Ratings'))),
      totalLikes: _reduce(this.props.wondersOfTheWorld,(acc, wonder) => {
        acc += wonder.likes;
        return acc;
      },0),
      sortFilterKey:'Ratings',
    };
  }
  onSearch = (searchText) => {
    const { wondersOfTheWorld } = this.props;
    this.setState({searchText});
    if(_isEmpty(searchText)){
      this.setState({wondersOfTheWorld});
    } else {
      const filteredWondersOfTheWorld = _reverse( _sortBy(_filter(wondersOfTheWorld, (wonder = {}) => {
        const placeName = _lowerCase(wonder.place);
        const searchString = _lowerCase(searchText);
        return placeName.indexOf(searchString) > -1;
      }), _lowerCase(this.state.sortFilterKey)));
      this.setState({ filteredWondersOfTheWorld });
    }
  }

  onCardLike = (cardId) => {
    this.setState((prevState) => {
      const {likedCards: prevLikedCards, totalLikes:prevTotalLikes} = prevState;
      if(!_find(prevLikedCards,cardId)){
        return {likedCards: [...prevLikedCards, cardId], totalLikes: prevTotalLikes+ 1};
      }
      return {likedCards: prevLikedCards, totalLikes: prevTotalLikes};
    });
  };

  onCardDisLike = (cardId) => {
    this.setState((prevState) => {
      const {likedCards: prevLikedCards, totalLikes:prevTotalLikes} = prevState;
      return {
        likedCards: _filter(prevLikedCards, (card) => {
          return card !== cardId
        }),
        totalLikes: prevTotalLikes -1,
      };
    });
  }

  sortItems = (sortFilterKey) => {
    this.setState({sortFilterKey});
    this.setState(({filteredWondersOfTheWorld}) => {
      return { filteredWondersOfTheWorld: _reverse(_sortBy(filteredWondersOfTheWorld, _lowerCase(sortFilterKey)))};
    });
  }

  render() {
    const {searchText, filteredWondersOfTheWorld, likedCards, totalLikes, sortFilterKey} = this.state;
    return (
      <div className="container">
        <Header
          searchText={searchText}
          onSearch={this.onSearch}
          filteredWondersOfTheWorld={filteredWondersOfTheWorld}
          totalLikes={totalLikes}
          totalHits={this.props.totalHits}
          sortFilterKey={sortFilterKey}
          sortItems={this.sortItems}
        />
        <Board
          wondersOfTheWorld={filteredWondersOfTheWorld}
          likedCards={likedCards}
          onCardLike={this.onCardLike}
          onCardDisLike={this.onCardDisLike}
        />
      </div>
    );
  }
}

App.propTypes = {
  totalHits: PropTypes.number,
  wondersOfTheWorld: PropTypes.array,
};

App.defaultPropTypes = {
  totalHits: 0,
  wondersOfTheWorld: [],
};

init();
window.onload = () =>{
  init();
  getWondersOfTheWorld().then((wondersOfTheWorld)=> {
    ReactDOM.render(<App
      wondersOfTheWorld={wondersOfTheWorld}
      totalHits={JSON.parse(localStorage.apiHitCount)}
    />, rootElement);
  });
};


const rootElement = document.getElementById('app');

