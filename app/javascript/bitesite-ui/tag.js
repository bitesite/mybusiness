import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { COLORS } from './colors';

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 1000px;
  gap: 6px;
  color: ${COLORS.shadeDark};
  background-color: ${COLORS.primaryWhite};
  border: 1px solid ${COLORS.shadesDark};
  width: fit-content;
  text-transform: capitalize;
`;

const Tag = ({ title, selected }) => (
  <TagWrapper>
    <span className="body-small-light">{title}</span>
    {selected && <span>&#10004;</span>}
  </TagWrapper>
);

Tag.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
};

export default Tag;
