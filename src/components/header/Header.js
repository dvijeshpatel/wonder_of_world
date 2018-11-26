import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';


import './header.css';

const AppTitle = () => {
  return (
    <div className="row titleBar">
    <div className="col-6 rupeek-logo">
    </div>
    <div className="col-6 hamBurger">
      <i class="fas fa-bars hamBurger__icon "></i>
    </div>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
    <AppTitle/>
    <SubHeader {...props}/>
    </div>
  );
};

Header.propTypes ={
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
  totalLikes: PropTypes.number,
  totalHits: PropTypes.number,
  sortFilterKey: PropTypes.string,
  sortItems: PropTypes.func,
};

export default Header;
