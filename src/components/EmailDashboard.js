import React from 'react';
import SearchBar from './SearchBar';
import Inbox from './Inbox';
import SenderDetails from './SenderDetails';

const EmailDashboard = () => (
  <div>
    <SearchBar />
    <SenderDetails />
    <Inbox />
  </div>
);

export default EmailDashboard;
