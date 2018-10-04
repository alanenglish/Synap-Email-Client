import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

class SearchBar extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    setTextFilter: PropTypes.func.isRequired
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div className="search-bar">
        <span className="fa fa-search search-bar__icon"></span>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search Email"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
