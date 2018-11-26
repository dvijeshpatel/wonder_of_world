import React from 'react';
import PropTypes from 'prop-types';

import './searchBar.css';

class SearchBar extends React.PureComponent {
  constructor(props){
    super(props);
  }
  onChange = (event) => {
    this.props.onSearch(event.target.value)
  }
  render() {
    const { searchText } = this.props;
    return (
      <div className="col-sm-4 searchBar">
        <i class="fas fa-search searchBar__icon"></i>
        <input onChange={this.onChange} className="searchBar__input searchBar__input__width" value={searchText} placeholder="Search by Name"  />
      </div>
    );
  }
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
};

// SearchBar.defaultProps = {
//   searchText: "Search by Name",
// };

export default SearchBar;