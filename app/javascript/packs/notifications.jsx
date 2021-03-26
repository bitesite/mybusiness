import React from 'react';
import ReactDOM from 'react-dom';

function Notifications() {

  function handleClick() {

  }

  return (
    <div>
      <button onClick={handleClick}>Enabled</button>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('notifications-mount-point');
  if (element) {
    ReactDOM.render(<Notifications />, element);
  }
});