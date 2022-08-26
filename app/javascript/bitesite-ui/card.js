import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import Tag from './tag';

const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  max-width: 378px;
  height: 530px;
  border: 1px solid #c4c6c7;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(97, 104, 105, 0.15);
  &:hover {
    box-shadow: 0px 8px 14px rgba(97, 104, 105, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  background-image: url(${({ src }) => src});
`;

const Card = ({ url, tags }) => (
  <CardWrapper>
    <CardImage src={url} alt="Blog Post Image" />
  </CardWrapper>
);

Card.propTypes = {
  url: PropTypes.string,
};

export default Card;
