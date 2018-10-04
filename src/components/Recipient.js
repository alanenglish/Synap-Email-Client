import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Recipient = ({ recipient }) => (
  <div className="recipient">
    <h4>{recipient.name && recipient.name}</h4>
    {/* <img src={sender.avatar} /> */}
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipient: state.recipient
  };
};

Recipient.propTypes = {
  recipient: PropTypes.any
};

Recipient.defaultProps = {
  recipient: null
};

export default connect(mapStateToProps)(Recipient);
