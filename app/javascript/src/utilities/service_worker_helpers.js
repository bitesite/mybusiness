const registerServiceWorker = (onRegister) => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceworker.js', { scope: './' }).then(() => {
      if (typeof onRegister === 'function') {
        onRegister();
      }
    });
  }
};

export { registerServiceWorker };
