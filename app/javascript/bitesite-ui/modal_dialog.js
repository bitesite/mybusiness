import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { COLORS } from './colors';

const ModalDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  overflow: auto;
  z-index: 1000;
  .modal-dialog {
    position: relative;
    background: ${COLORS.primaryWhite};
    border-radius: 16px;
    box-shadow: 0px -4px 8px rgba(97, 104, 105, 0.15);
    margin: 20px auto;
    height: fit-content;
    margin-top: ${(props) => props.marginTop && props.marginTop};
    padding: ${(props) => props.padding || '40px 16px'};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    width: calc(100% - 60px);
    -webkit-animation-duration: 400ms;
    animation-duration: 400ms;

    .close-button {
      position: absolute;
      top: 16px;
      right: 16px;
      /* float: right; */
      cursor: pointer;
      path {
        fill: ${COLORS.shadesDarknest};
      }
    }
  }
`;

const PopupContainer = styled(ModalDialogContainer)`
  .modal-dialog {
    position: relative;
    background: ${COLORS.primaryWhite};
    border: 1px solid ${COLORS.shadesLight};
    border-radius: 10px;
    box-shadow: 0px 8px 14px rgba(97, 104, 105, 0.15);
    padding: 0;
  }
`;

function ModalDialog({ children, maxWidth, marginTop, modalDialogClassName, padding, popup }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {!popup ? (
        <ModalDialogContainer maxWidth={maxWidth} marginTop={marginTop} padding={padding}>
          <div className={`modal-dialog ${modalDialogClassName}`}>{children}</div>
        </ModalDialogContainer>
      ) : (
        <PopupContainer maxWidth={maxWidth} marginTop={marginTop} padding={padding}>
          <div className={`modal-dialog ${modalDialogClassName}`}>{children}</div>
        </PopupContainer>
      )}
    </>
  );
}

ModalDialog.defaultProps = {
  children: null,
  modalDialogClassName: '',
};

ModalDialog.propTypes = {
  children: PropTypes.array,
  modalDialogClassName: PropTypes.string,
  maxWidth: PropTypes.number,
  marginTop: PropTypes.number,
  padding: PropTypes.number,
};

export default ModalDialog;
