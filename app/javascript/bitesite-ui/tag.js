import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const TagWrapper = styled.div``;

const Tag = ({ title, selected }) => (
  <TagWrapper>
    <span>{title}</span>
    {selected && <span>&#10004;</span>}
  </TagWrapper>
);

Tag.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
};

export default Tag;
