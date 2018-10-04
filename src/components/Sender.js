import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sender = ({ sender }) => (
  <div className="sender">
    <h4>{sender.name && sender.name}</h4>
    {/* <img src={sender.avatar} /> */}
  </div>
);

const mapStateToProps = (state) => {
  return {
    sender: state.sender
  };
};

Sender.propTypes = {
  sender: PropTypes.any
};

Sender.defaultProps = {
  sender: null
};

export default connect(mapStateToProps)(Sender);
