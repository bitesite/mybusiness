import styled from 'styled-components/macro';
import { COLORS } from './colors';

const Tag = styled.div`
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
  white-space: nowrap;
  ${(props) =>
    props.selected &&
    `
    color: ${COLORS.primaryWhite};
    background-color: ${COLORS.primaryDefault};
    border: 1px solid ${COLORS.primaryDefault};
  `}
`;

export default Tag;
