import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import InboxItem from './InboxItem';
import selectEmails from '../selectors/emails';

class InfiniteScrollInbox extends React.Component {
  static propTypes = {
    emails: PropTypes.array.isRequired,
    error: PropTypes.any
  };

  static defaultProps = {
    error: null
  }

  constructor(props) {
    super(props);
    this.state = {
      items: 10,
      loadingState: false
    };

    this.inboxRef = React.createRef();
  }

  componentDidMount() {
    this.inboxRef.current.addEventListener('scroll', () => {
      if (this.inboxRef.current.scrollTop + this.inboxRef.current.clientHeight >= this.inboxRef.current.scrollHeight) {
        if (this.props.emails.length > this.state.items + 9) {
          this.loadMoreItems();
        }
      }
    });
  }

  displayInboxItems = () => {
    const emailItems = [];
    const { emails } = this.props;
    for (let i = 0; i < this.state.items; i++) {
      emailItems.push(<InboxItem key={emails[i].id} email={emails[i]} />);
    }
    return emailItems;
  };

  loadMoreItems = () => {
    this.setState({ loadingState: true });
    this.setState({ items: this.state.items + 10 });
    this.setState({ loadingState: false });
  }

  render() {
    const { error } = this.props;
    if (error) toast.error(`Oops! ${error} - Please try again by refreshing the page!`);
    return (
      <div ref={this.inboxRef} className="inbox">
        {!error && <ul className="list-group">{this.displayInboxItems()}</ul>}
        {this.state.loadingState ? <p>Loading more emails..</p> : ''}
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

export default connect(mapStateToProps)(InfiniteScrollInbox);
