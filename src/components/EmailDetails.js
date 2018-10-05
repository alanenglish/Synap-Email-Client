import React from 'react';
import Sender from './Sender';
import Recipient from './Recipient';

const EmailDetails = () => (
  <div className="email-details">
    <Sender />
    <Recipient />
  </div>
);

export default EmailDetails;
