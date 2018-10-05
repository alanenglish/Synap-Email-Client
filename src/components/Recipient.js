import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SenderOrRecipient from './SenderOrRecipient';

const Recipient = ({ recipient }) => (
  <div>
    <SenderOrRecipient person={recipient} message="Received By:" insertClass="recipient" />
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
