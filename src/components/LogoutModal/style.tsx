import styled from 'styled-components';

export const LogoutModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.56);
  font-size: 16px;

  .title {
    white-space: pre-line;
  }

  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
  }

  .popup {
    animation-delay: 0.1ms;
    background: #fdfdfd;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const DefaultButton = styled.div`
  cursor: pointer;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ButtonCancel = styled(DefaultButton)`
  background: #dbdcde;
  color: #000000;
`;

export const ButtonConfirm = styled(DefaultButton)`
  background-size: cover;
  background: linear-gradient(to right, #ff5555, #58c6f8);
  background-repeat: no-repeat;
  background-position: center right;
`;
