import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../../bitesite-ui';
import GeneralPost from './general_post';

const DarkBackgroundGeneralPostWrapper = styled.div`
  gap: 160px;
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: ${COLORS.background};
  width: 100%;
`;

const DarkBackgroundGeneralPost = (props) => (
  <DarkBackgroundGeneralPostWrapper>
    <div className="container">
      <GeneralPost {...props} />
    </div>
  </DarkBackgroundGeneralPostWrapper>
);

export default DarkBackgroundGeneralPost;
