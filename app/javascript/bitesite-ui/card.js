import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { COLORS } from './colors';
import Tag from './tag';

const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

const CardTitle = styled.div`
  color: ${COLORS.shadowDarknest};
`;

const CardText = styled.div`
  color: ${COLORS.shadesDark};
`;

const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
`;

const Card = ({ url, tags, title, text, footerContent }) => (
  <CardWrapper>
    <CardImage src={url} alt="Blog Post Image" />
    <CardTags>{tags && tags.map((tag, i) => <Tag key={i} title={tag} selected={false} />)}</CardTags>
    <CardTitle className="body-large">{title}</CardTitle>
    <CardText className="body-small">{text}</CardText>
    <CardFooter>{footerContent}</CardFooter>
  </CardWrapper>
);

Card.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  text: PropTypes.string,
  footerContent: PropTypes.node,
};

export default Card;
