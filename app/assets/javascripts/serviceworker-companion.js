var isPushEnabled = false;

window.addEventListener('load', function() {
  var enableNotifcationsLink = document.querySelector('#enable-notifications-link');
  enableNotifcationsLink.addEventListener('click', function(e) {
    e.preventDefault();

    if (isPushEnabled) {
      unsubscribe();
    } else {
      subscribeToNotifications();
    }
  });
  
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
      .then(initializeState);
  }
});

function sendSubscriptionToServer(subscription) {
  $.ajax({
    url: '/devices',
    method: 'POST',
    data: {
      device: {
        web_push_endpoint: subscription.endpoint
      }
    },
    success: function() {
      console.log("Subscription successfully registered with server.");
    }, 
    error: function() {
      console.log("Error registering subscription with server.");
    }
  });
}

function subscribeToNotifications() {
  // Disable the button so it can't be changed while
  // we process the permission request
  var enableNotifcationsLink = document.querySelector('#enable-notifications-link');
  enableNotifcationsLink.disabled = true;

  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: new Uint8Array(gon.vapid_public_key_bytes)})
      .then(function(subscription) {
        // The subscription was successful
        isPushEnabled = true;
        enableNotifcationsLink.innerHTML = 'Disable Push Messages';
        enableNotifcationsLink.disabled = false;

        // TODO: Send the subscription.endpoint to your server
        // and save it to send a push message at a later date
        return sendSubscriptionToServer(subscription);
      })
      .catch(function(e) {
        if (Notification.permission === 'denied') {
          // The user denied the notification permission which
          // means we failed to subscribe and the user will need
          // to manually change the notification permission to
          // subscribe to push messages
          console.warn('Permission for Notifications was denied');
          enableNotifcationsLink.disabled = true;
        } else {
          // A problem occurred with the subscription; common reasons
          // include network errors, and lacking gcm_sender_id and/or
          // gcm_user_visible_only in the manifest.
          console.error('Unable to subscribe to push.', e);
          enableNotifcationsLink.disabled = false;
          enableNotifcationsLink.innerHTML = 'Enable Push Messages';
        }
      });
  });
}


function initializeState() {
  // Are Notifications supported in the service worker?
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    console.warn('Notifications aren\'t supported.');
    return;
  }

  // Check the current Notification permission.
  // If its denied, it's a permanent block until the
  // user changes the permission
  if (Notification.permission === 'denied') {
    console.warn('The user has blocked notifications.');
    return;
  }

  // Check if push messaging is supported
  if (!('PushManager' in window)) {
    console.warn('Push messaging isn\'t supported.');
    return;
  }

  // We need the service worker registration to check for a subscription
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // Do we already have a push message subscription?
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        // Enable any UI which subscribes / unsubscribes from
        // push messages.
        var enableNotifcationsLink = document.querySelector('#enable-notifications-link');
        enableNotifcationsLink.innerHTML = 'Click to subscribe to notifications';

        if (!subscription) {
          // We aren't subscribed to push, so set UI
          // to allow the user to enable push
          return;
        }

        // Keep your server in sync with the latest subscriptionId
        sendSubscriptionToServer(subscription);

        // Set your UI to show they have subscribed for
        // push messages
        enableNotifcationsLink.innerHTML = 'Disable Push Messages';
        isPushEnabled = true;
      })
      .catch(function(err) {
        console.warn('Error during getSubscription()', err);
      });
  });
}