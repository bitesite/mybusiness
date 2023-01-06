import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { registerServiceWorker } from '../src/utilities/service_worker_helpers';
import {
  initializeServiceWorkerNotificationState,
  sendSubscriptionToServer,
  deleteSubscriptionFromServer,
} from '../src/utilities/notifications_helpers';

function WebPushNotificationsManager({ hidden }) {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [updatingSubscription, setUpdatingSubscription] = useState(false);

  function subscribeToNotifications() {
    setUpdatingSubscription(true);

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager
        .subscribe({ userVisibleOnly: true, applicationServerKey: new Uint8Array(window.gon.vapid_public_key_bytes) })
        .then(function (subscription) {
          setIsPushEnabled(true);
          setUpdatingSubscription(false);
          return sendSubscriptionToServer(subscription, true);
        })
        .catch(() => {
          window.flash('error', 'There was a problem getting your subscription information.');
        });
    });
  }

  function unsubscribeToNotifications() {
    setUpdatingSubscription(true);

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (!subscription) {
            setIsPushEnabled(false);
            return;
          }

          deleteSubscriptionFromServer(subscription);

          // We have a subscription, so call unsubscribe on it
          subscription
            .unsubscribe()
            .then(function () {
              setIsPushEnabled(false);
            })
            .catch(function (e) {
              console.log('Unsubscription error: ', e);
              setIsPushEnabled(true);
            });
        })
        .catch(function (e) {
          setIsPushEnabled(true);
          console.error('Error thrown while unsubscribing from push messaging.', e);
        });
    });
  }

  function handleChange() {
    if (isPushEnabled) {
      unsubscribeToNotifications();
    } else {
      subscribeToNotifications();
    }
  }

  function handleSubscriptionFound(subscription) {
    // Keep your server in sync with the latest subscriptionId
    sendSubscriptionToServer(subscription, true);

    // Set your UI to show they have subscribed for
    // push messages
    setIsPushEnabled(true);
  }

  useEffect(() => {
    registerServiceWorker(() => {
      initializeServiceWorkerNotificationState(handleSubscriptionFound);
    });
  }, []);

  if (hidden) {
    return <span className="component-web-push-notifications-manager" />;
  }

  return (
    <div className="component-web-push-notifications-manager">
      <span className="switch-container">
        <Switch onChange={handleChange} checked={isPushEnabled} uncheckedIcon={false} onColor="#009ca5" />
      </span>
      <div className="label">Web Push Notifications {isPushEnabled ? 'Enabled' : 'Disabled'}</div>
    </div>
  );
}

WebPushNotificationsManager.propTypes = {
  hidden: PropTypes.bool,
};

WebPushNotificationsManager.defaultProps = {
  hidden: false,
};

document.addEventListener('DOMContentLoaded', () => {
  const mountPoints = document.getElementsByClassName('web-push-notifications-manager-mount-point');

  for (const mountPoint of mountPoints) {
    const hidden = mountPoint.dataset.hidden === 'true';
    ReactDOM.render(<WebPushNotificationsManager hidden={hidden} />, mountPoint);
  }
});
