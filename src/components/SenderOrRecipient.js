import React from 'react';
import PropTypes from 'prop-types';

const SenderOrRecipient = ({ person, message, insertClass }) => (
  <div>
    { person && (
      <div className={insertClass}>
        <h4 className="sender-recipient__from-to">{message}</h4>
        <img className="sender-recipient__image" src={person.avatar} />
        <h4 className="sender-recipient__name">{person.name}</h4>
        <p className="sender-recipient__email-description">"{person.email}"</p>
        {person.company && (
          <div className="sender-recipient__company-container">
            <h4 className="sender-recipient__company-name">{person.company.name}</h4>
            <img className="sender-recipient__company-logo" src={person.company.logo} />
            <h4 className="sender-recipient__email-description">{person.company.description}</h4>
          </div>
          )
        }
      </div>
      )
    }
  </div>
);

SenderOrRecipient.propTypes = {
  person: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
  insertClass: PropTypes.string.isRequired
};

export default SenderOrRecipient;
