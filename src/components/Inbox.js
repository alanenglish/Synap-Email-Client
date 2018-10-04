import React from 'react';
import { connect } from 'react-redux';
import InboxItem from './InboxItem';

class Inbox extends React.Component {
  displayInboxItems = () => {
    return this.props.emails.map((email) => (
      <InboxItem key={email.id} email={email} />
    ));
  }

  render() {
    return (
      <div>
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
    emails: state.emails
  };
};

export default connect(mapStateToProps)(Inbox);
