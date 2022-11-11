import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function CloseIcon({ className, color = 'none', size = 25, onClick }) {
  return (
    <Icon
      onClick={onClick}
      icon="carbon:close"
      className={`close-button ${className}`}
      color={color}
      width={size}
      height={size}
    />
  );
}

CloseIcon.defaultProps = {
  className: '',
  color: 'none',
  size: 25,
  onClick: () => {},
};

CloseIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default CloseIcon;
