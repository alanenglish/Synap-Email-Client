import React from 'react';
import SearchBar from './SearchBar';
// import Inbox from './Inbox';
import InfiniteScrollInbox from './InfiniteScrollInbox';
import EmailDetails from './EmailDetails';

const EmailDashboard = () => (
  <div>
    <SearchBar />
    <div className="row main-content">
      <div className="col-lg-4 col-md-5 col-sm-12 left-col">
        <EmailDetails />
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 right-col">
        {/* <Inbox /> */}
        <InfiniteScrollInbox />
      </div>
    </div>
  </div>
);

export default EmailDashboard;
