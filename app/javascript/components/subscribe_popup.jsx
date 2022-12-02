import React from 'react';
import propTypes from 'prop-types';
import GeneralPost from './general/general_post';
import Mailbox from '../../assets/images/mailbox-large.png';

const SubscribePopup = () => {
  const header = <div className="body-large-bold">Subscribe to the BiteSite Newsletter!</div>;
  const text = (
    <>
      <div className="body-small-light popup-text-container">
        Stay in the know about our top blog articles, company updates and industry recommendations in a regular newsletter for our
        community.
      </div>
      <div className="input-container">
        <label className="body-regular" htmlFor="name">
          Full Name
          <input className="input-box" type="text" required id="name" />
        </label>

        <label className="body-regular" htmlFor="email">
          Email Address
          <input className="input-box" type="email" id="email" pattern=".+@globex\.com" required />
        </label>
      </div>
    </>
  );
  const sendEmail = () => {
    window.alert('email sent');
  };
  return (
    <GeneralPost
      image={Mailbox}
      header={header}
      text={text}
      buttonText="Subscribe"
      buttonClass="primary-default"
      onClick={sendEmail}
    />
  );
};

export default SubscribePopup;
