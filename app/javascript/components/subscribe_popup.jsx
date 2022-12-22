import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components/macro';
import { Icon } from '@iconify/react';
import Mailbox from '../../assets/images/mailbox-large.png';
import { Button, COLORS } from '../bitesite-ui';

const SubscribeFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${COLORS.primaryWhite};
  width: 100%;
  margin-top: 10px;

  .popup-text-container {
    color: ${COLORS.shadesDark};
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    margin-top: 64px;

    .input-box {
      border: 1px solid ${COLORS.shadesLight};
      width: 335.5px;
      height: 40px;
      box-shadow: 0px 1px 3px rgba(97, 104, 105, 0.15);
      border-radius: 5px;
      padding: 0px 10px;
      label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }
    }
    .subscribe-button {
      width: 118px;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      .input-box {
        width: 280px;
      }
      .subscribe-button {
        width: 100%;
      }
    }
  }
`;

const SubscribePopupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'form image';
  gap: 32px;
  grid-template-rows: 1fr;
  background: ${COLORS.primaryWhite};
  border-radius: inherit;
  max-width: 783px;

  .subscribe-popup-form-container {
    grid-area: form;
    padding: 32px 0 32px 32px;
  }

  .subscribe-popup-image {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: image;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: ${COLORS.shadesBackground};
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 0 16px 16px 16px;

    .subscribe-popup-form-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0px;
      width: 100%;
      .subscribe-popup-form {
        width: 100%;
      }
    }
    .subscribe-popup-image {
      width: calc(100% + 32px);
      height: 230px;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      img {
        width: 80%;
        height: 230px;
      }
    }
  }
`;

const SubscribeForm = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const submit = () =>
    email &&
    fullName &&
    email.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email,
      LNAME: fullName,
    });

  const clearFields = () => {
    setEmail('');
    setFullName('');
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  return (
    <SubscribeFormWrapper className="subscribe-popup-form">
      <div className="body-small-light popup-text-container">
        Stay in the know about our top blog articles, company updates and industry recommendations in a regular newsletter for our
        community.
      </div>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
      <div className="input-container">
        <div className="input-box-item">
          <label className="body-regular input-box-label" htmlFor="fullName">
            Full Name
            <input
              className="input-box"
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
        </div>
        <div className="input-box-item">
          <label className="body-regular input-box-label" htmlFor="email">
            Email Address
            <input className="input-box" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <Button className="primary-default subscribe-button" onClick={submit}>
          Subscribe
        </Button>
      </div>
    </SubscribeFormWrapper>
  );
};

const SubscribePopup = ({ onClose }) => {
  const url =
    'https://bitesite.us20.list-manage.com/subscribe/post?u=ebbbe5d87132eda4ed7f05057&amp;id=4f3ed4a6c9&amp;v_id=4327&amp;f_id=00103fe4f0';

  return (
    <SubscribePopupWrapper className="subscribe-popup">
      <div className="subscribe-popup-form-container">
        <div className="body-large-bold">Subscribe to the BiteSite Newsletter!</div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <SubscribeForm onValidated={(formData) => subscribe(formData)} status={status} message={message} />
          )}
        />
      </div>
      <div className="subscribe-popup-image">
        <img src={Mailbox} alt="Mailbox" />
      </div>
      <div className="close-button" onClick={onClose} role="button" tabIndex={0} onKeyDown={onClose}>
        <Icon icon="material-symbols:close-rounded" style={{ fontSize: '24px' }} />
      </div>
    </SubscribePopupWrapper>
  );
};

export default SubscribePopup;
