import React from 'react';
import PropTypes from 'prop-types';
import ContentSummary from '../contentSummary';
import SearchBar from '../searchBar';
import './subHeader.css';

class SortFilter extends React.PureComponent {
  constructor(props){
    super(props);
  }
  onSort =(event) => {
    this.props.sortItems(event.target.value);
  }
  render() {
    const { sortFilterKey, sortItems } = this.props;
    return (
      <div className="col-sm-4" style={{paddingLeft: "0",paddingRight: "25px"}}>
        <div className="sortFilter sortFilter__width">
          <span>Sort By:</span>
          <select className="filter__select" value={sortFilterKey} onChange={this.onSort}>
            <option value="Ratings">Ratings</option>
            <option value="Likes">Likes</option>
          </select>
        </div>
      </div>
    );
  }
};


const SubHeader = (props) => {
  return (<div className="row subHeader">
    <SearchBar onSearch={props.onSearch} searchText={props.searchText}/>
    <ContentSummary
      totalLikes={props.totalLikes}
      totalHits={props.totalHits}
    />
    <SortFilter sortFilterKey={props.sortFilterKey} sortItems={props.sortItems}/>
  </div>);
};


SubHeader.propTypes ={
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
  totalLikes: PropTypes.number,
  totalHits: PropTypes.number,
  sortFilterKey: PropTypes.string,
  sortItems: PropTypes.func,
};

export default SubHeader;