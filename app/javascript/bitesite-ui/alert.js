import styled from 'styled-components/macro';
import { COLORS } from './colors';

const Alert = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px;
  border: 1px solid;
  border-radius: 2px;
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  ${({ alertType }) => {
    switch (alertType) {
      case 'success':
        return `
          border-color: ${COLORS.green};
          background-color: ${COLORS.honeydew};
          color: ${COLORS.shadesDarknest};
        `;
      case 'error':
        return `
          border-color: ${COLORS.alertRed};
        background-color: ${COLORS.lavenderBlush};
          color: ${COLORS.alertRed};
      `;
      case 'warning':
        return `
          border-color: ${COLORS.yellowOrange};
          background-color: ${COLORS.blanchedAlmond};
          color: ${COLORS.shadesDarknest};
        `;
      default:
        return `
          border-color: ${COLORS.shadesDarknest};
          background-color: ${COLORS.primaryWhite};
          color: ${COLORS.shadesDarknest};
        `;
    }
  }}
  .alert-icon {
    color: ${({ alertType }) => {
      switch (alertType) {
        case 'success':
          return COLORS.primaryDefault;
        case 'error':
          return COLORS.alertRed;
        case 'warning':
          return COLORS.shadesDarknest;
        default:
          return COLORS.shadesDarknest;
      }
    }};
  }
`;

export default Alert;
