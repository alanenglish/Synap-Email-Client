import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InboxItem from './InboxItem';
import selectEmails from '../selectors/emails';

class Inbox extends React.Component {
  static propTypes = {
    emails: PropTypes.array.isRequired
  };

  displayInboxItems = () => {
    return this.props.emails.map((email) => (
      <InboxItem key={email.id} email={email} />
    ));
  };

  render() {
    return (
      <div className="inbox">
        {this.props.emails.length ? (
          <ul className="list-group">{this.displayInboxItems()}</ul>
          ) : (
            <p>You have no emails.</p>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emails: selectEmails(state.emails, state.filters)
  };
};

export default connect(mapStateToProps)(Inbox);
