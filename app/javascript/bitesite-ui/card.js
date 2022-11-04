import styled from 'styled-components/macro';

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 24px;
  width: 378px;
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
