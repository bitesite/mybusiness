function initializeServiceWorkerNotificationState(onSubscriptionFound, onNoSubscriptionFound) {
  // Are Notifications supported in the service worker?
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    console.warn("Notifications aren't supported.");
    return;
  }

  // Check the current Notification permission.
  if (Notification.permission === 'denied') {
    console.warn('The user has blocked notifications.');
    return;
  }

  // Check if push messaging is supported
  if (!('PushManager' in window)) {
    console.warn("Push messaging isn't supported.");
    return;
  }

  // We need the service worker registration to check for a subscription
  navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
    // Do we already have a push message subscription?
    serviceWorkerRegistration.pushManager
      .getSubscription()
      .then(function (subscription) {
        if (!subscription) {
          if (typeof onNoSubscriptionFound === 'function') {
            onNoSubscriptionFound();
          }
          return;
        }

        if (typeof onSubscriptionFound === 'function') {
          onSubscriptionFound(subscription);
        }
      })
      .catch(function (err) {
        console.warn('Error during getSubscription()', err);
      });
  });
}

function sendSubscriptionToServer(subscription, signedIn, onSuccess) {
  const subscriptionJSON = subscription.toJSON();
  $.ajax({
    url: '/devices',
    method: 'POST',
    data: {
      device: {
        web_push_endpoint: subscriptionJSON.endpoint,
        web_push_p256dh: subscriptionJSON.keys.p256dh,
        web_push_auth: subscriptionJSON.keys.auth,
        signed_in: signedIn,
      },
    },
    success() {
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    },
    error() {
      console.error('Error registering subscription with server.');
    },
  });
}

function deleteSubscriptionFromServer(subscription) {
  const subscriptionJSON = subscription.toJSON();
  $.ajax({
    url: `/devices`,
    method: 'DELETE',
    data: {
      web_push_endpoint: subscriptionJSON.endpoint,
    },
    success() {},
    error() {
      console.error('Error registering subscription with server.');
    },
  });
}

export { initializeServiceWorkerNotificationState, sendSubscriptionToServer, deleteSubscriptionFromServer };
