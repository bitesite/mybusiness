const CACHE_VERSION = 'v1';
const CACHE_NAME = `${CACHE_VERSION}:sw-cache-`;

function onInstall(event) {
  console.log('[Serviceworker]', 'Installing!', event);
}

function onActivate(event) {
  console.log('[Serviceworker]', 'Activating!', event);
}

function onPush(event) {
  console.log('Received a push message', event);
  const messageData = event.data.json();

  const title = messageData.title || 'BiteSite Notification!';
  const body = messageData.body || 'We have received a message.';
  const icon = '/images/icon-192x192.png';
  const tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
      tag,
    })
  );
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('push', onPush);
