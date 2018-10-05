import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { startSetFocusedSender } from '../actions/sender';
import { startSetFocusedRecipient } from '../actions/recipient';
import { setActiveEmail } from '../actions/active';

class InboxItem extends React.Component {
  static propTypes = {
    activeEmail: PropTypes.any,
    email: PropTypes.object.isRequired,
    startSetFocusedSender: PropTypes.func.isRequired,
    startSetFocusedRecipient: PropTypes.func.isRequired,
    setActiveEmail: PropTypes.func.isRequired
  };

  static defaultProps = {
    activeEmail: ''
  }

  onInboxItemClick = () => {
    const { to, from } = this.props.email;
    this.props.startSetFocusedSender(from);
    this.props.startSetFocusedRecipient(to);
    this.props.setActiveEmail(this.props.email);
  };

  render() {
    const { subject, body, id } = this.props.email;
    return (
      <li
        className={classnames("list-group-item email", {"active-email": this.props.activeEmail.id === id })}
        onClick={this.onInboxItemClick}
      >
        <h4 className="email__subject">{subject}</h4>
        <p className="email__body">{body}</p>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeEmail: state.activeEmail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSetFocusedSender: (emailAddress) => dispatch(startSetFocusedSender(emailAddress)),
    startSetFocusedRecipient: (emailAddress) => dispatch(startSetFocusedRecipient(emailAddress)),
    setActiveEmail: (email) => dispatch(setActiveEmail(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxItem);
