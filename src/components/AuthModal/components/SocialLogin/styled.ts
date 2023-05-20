import styled from 'styled-components';

export const SocialLoginWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  .facebook {
    :disabled {
      opacity: 0.5;
    }

    font-size: 0;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/icons/facebook_logo.png');
  }

  #appleid-signin > div {
    font-size: 0 !important;
    width: 40px !important;
    height: 40px !important;
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/icons/facebook_logo.png');
  }
`;

export const SocialLoginButton = styled.button`
  :disabled {
    opacity: 0.5;
  }

  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginFacebook = styled(SocialLoginButton)`
  background-image: url('/images/icons/facebook_logo.png');
`;

export const LoginGoogleButton = styled(SocialLoginButton)`
  background-image: url('/images/icons/google_logo.png');
`;

export const LoginAppleButton = styled(SocialLoginButton)`
  background-image: url('/images/icons/apple_logo.png');
`;
