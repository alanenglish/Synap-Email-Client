import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import InboxItem from './InboxItem';
import selectEmails from '../selectors/emails';

class Inbox extends React.Component {
  static propTypes = {
    emails: PropTypes.array.isRequired,
    error: PropTypes.any
  };

  static defaultProps = {
    error: null
  }

  displayInboxItems = () => {
    return this.props.emails.map((email) => (
      <InboxItem key={email.id} email={email} />
    ));
  };

  render() {
    const { error } = this.props;
    return (
      <div className="inbox">
        {error ? toast.error(`Oops! ${error} - Please try again by refreshing the page!`) :
          (
            <ul className="list-group">{this.displayInboxItems()}</ul>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emails: selectEmails(state.emails, state.filters),
    error: state.errors
  };
};

export default connect(mapStateToProps)(Inbox);
