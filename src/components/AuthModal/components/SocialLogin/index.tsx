import Loading from '@/components/Loading';
import { LoginAppleButton, LoginGoogleButton, SocialLoginWrapper } from './styled';
import useSocialAuth from '../../services/hooks/useSocialAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import AppleLogin from 'react-apple-login';
import { getCurrentHost } from '@/utils/browser';

const FACEBOOK_APP_ID = process?.env?.NEXT_PUBLIC_FACEBOOK_APP_ID || '';
const GOOGLE_CLIENT_ID = process?.env?.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
const APPLE_CLIENT_ID = process?.env?.NEXT_PUBLIC_APPLE_CLIENT_ID || '';

const SocialLogin = () => {
  const { handleLoginFacebook, handleLoginApple, isLoginSocialLoading } = useSocialAuth();
  if (isLoginSocialLoading) {
    return (
      <SocialLoginWrapper>
        <Loading />
      </SocialLoginWrapper>
    );
  }

  return (
    <>
      <SocialLoginWrapper>
        <FacebookLogin
          appId={FACEBOOK_APP_ID}
          fields="name,email,picture"
          callback={handleLoginFacebook}
          cssClass="facebook"
        />

        {/* <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <LoginGoogleButton onClick={() => handleLoginGoogle()} />
        </GoogleOAuthProvider> */}
        {/* 
        <AppleLogin
          clientId={APPLE_CLIENT_ID}
          redirectURI={getCurrentHost()}
          responseType="id_token"
          usePopup={true}
          callback={handleLoginApple}
          render={props => <LoginAppleButton {...props} />}
        /> */}
      </SocialLoginWrapper>
    </>
  );
};

export default function HOC() {
  return (
    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <SocialLogin />
    // </GoogleOAuthProvider>
  );
}
