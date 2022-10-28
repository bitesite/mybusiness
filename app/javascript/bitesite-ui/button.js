import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { COLORS } from './colors';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  width: 140px;
  height: 50px;
  border-radius: 1000px;
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case 'primary':
        return css`
          background-color: ${COLORS.primaryDefault};
          color: ${COLORS.primaryWhite};
          border: 1px solid ${COLORS.primaryDefault};
          box-shadow: 0px 8px 14px rgba(97, 104, 105, 0.15);

          &:hover {
            background-color: ${COLORS.primaryLighter};
            border: 1px solid ${COLORS.primaryLighter};
          }

          &:selected {
            background-color: ${COLORS.primaryLight};
            border: 1px solid ${COLORS.primaryLight};
          }

          &:disabled {
            background-color: ${COLORS.primaryDefault};
            border: 1px solid ${COLORS.primaryDefault};
            opacity: 0.5;
            cursor: not-allowed;
          }
        `;

      case 'secondary':
        return css`
          background-color: ${COLORS.primaryWhite};
          color: ${COLORS.shadowDarknest};
          border: 1px solid ${COLORS.shadesDarknest};

          &:hover {
            border-color: ${COLORS.primaryLighter};
            color: ${COLORS.primaryLighter};
          }

          &:selected {
            border-color: ${COLORS.primaryLight};
            color: ${COLORS.primaryLight};
          }

          &:disabled {
            border-color: ${COLORS.shadesDark};
            color: ${COLORS.shadesDark};
            cursor: not-allowed;
          }
        `;
      default:
        return css``;
    }
  }}
`;

const DashboardButton = ({ type, children, onClick, disabled, href = '', className, typography }) => (
  <Button
    as={href ? 'a' : 'button'}
    onClick={onClick}
    className={`${typography || 'body-medium'} ${className}`}
    type={type}
    disabled={disabled}
    href={href}
  >
    <div>{children}</div>
  </Button>
);

export default DashboardButton;

DashboardButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  typography: PropTypes.string,
};

DashboardButton.defaultProps = {
  type: 'primary',
  children: 'Button',
  onClick: () => {},
  disabled: false,
  href: '',
  className: '',
  typography: 'body-regular',
};
