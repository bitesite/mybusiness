import styled from 'styled-components/macro';

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 24px;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '360px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 530px;
  border: 1px solid #c4c6c7;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(97, 104, 105, 0.15);
  &:hover {
    box-shadow: 0px 8px 14px rgba(97, 104, 105, 0.15);
  }
`;

export default Card;
