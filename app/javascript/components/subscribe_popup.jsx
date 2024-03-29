import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components/macro';
import { Icon } from '@iconify/react';
import { Frame } from '@bitesite/react-figstrap';
import Mailbox from '../../assets/images/mailbox-large.png';
import { Button, COLORS, Alert } from '../bitesite-ui';
import Link from './link';

const SubscribeFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${COLORS.primaryWhite};
  width: 100%;
  margin-top: 60px;

  .popup-text-container {
    color: ${COLORS.shadesDark};
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    margin: 60px 0;

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
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () =>
    email && fullName && email.indexOf('@') > -1
      ? onValidated({
          EMAIL: email,
          LNAME: fullName,
        })
      : setErrorMessage('Enter a valid email address and full name.');

  const clearFields = () => {
    setEmail('');
    setFullName('');
    setErrorMessage('');
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  useEffect(() => {
    if (status) {
      setErrorMessage('');
    }
  }, [status]);

  return (
    <SubscribeFormWrapper className="subscribe-popup-form">
      <div className="body-small-light popup-text-container">
        Stay in the know about our top blog articles, company updates and industry recommendations in a regular newsletter for our
        community.
      </div>
      {status === 'sending' && (
        <Alert alertType="warning" className="alert" margin="30px 0 0 0">
          <Icon icon="mi:circle-warning" /> <span className="body-small-light">Sending...</span>
        </Alert>
      )}
      {status === 'error' && (
        <Alert alertType="error" className="alert" margin="30px 0 0 0">
          <Icon icon="mi:circle-warning" />
          <span className="body-small-light" dangerouslySetInnerHTML={{ __html: message }} />
        </Alert>
      )}
      {status === 'success' && (
        <Alert alertType="success" className="alert" margin="30px 0 0 0">
          <Icon icon="akar-icons:circle-check" />
          <span className="body-small-light" dangerouslySetInnerHTML={{ __html: message }} />
        </Alert>
      )}
      {errorMessage && (
        <Alert alertType="error" className="alert" margin="30px 0 0 0">
          <Icon icon="mi:circle-warning" />
          <span className="body-small-light">{errorMessage}</span>
        </Alert>
      )}
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
      <Frame className="caption-light popup-text-container content__gdprLega" gap={10} vertical>
        <div>You can unsubscribe at any time by clicking the link in the footer of our emails.</div>
        <div>
          We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will
          be transferred to Mailchimp for processing.{' '}
          <Link
            path="https://mailchimp.com/legal/privacy/"
            target="_blank"
            rel="noreferrer"
            className="caption-light"
            style={{ color: COLORS.shadesDark }}
          >
            Mailchimp's Privacy Policy
          </Link>
        </div>
      </Frame>
    </SubscribeFormWrapper>
  );
};

const SubscribePopup = ({ onClose }) => {
  const url = `https://bitesite.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U};id=${process.env.REACT_APP_MAILCHIMP_ID};v_id=4327&amp;f_id=00103fe4f0`;

  return (
    <SubscribePopupWrapper className="subscribe-popup">
      <div className="subscribe-popup-form-container">
        <div className="body-large-bold">Subscribe to the BiteSite Newsletter!</div>
        <div className="mailchimp-subscribe">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <SubscribeForm onValidated={(formData) => subscribe(formData)} status={status} message={message} />
            )}
          />
        </div>
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
