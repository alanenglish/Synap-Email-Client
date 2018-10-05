import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SenderOrRecipient from './SenderOrRecipient';

const Sender = ({ sender }) => (
  <div className="details-line-break">
    <SenderOrRecipient person={sender} message="Message From:" insertClass="sender" />
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
  sender: ''
};

export default connect(mapStateToProps)(Sender);
