import React from 'react';
import {RootStack} from '@navigator';

import LoginScreen from '@screens/Auth/Login';
import LoginWithEmail from '@screens/Auth/Login/Email';
import Register from '@screens/Auth/Register';
import AccountSetup from '@screens/Auth/Register/AccountSetup';
import ForgotPassword from '@screens/Auth/ForgotPassword';
import ForgotPassword__VerifyCode from '@screens/Auth/ForgotPassword/ForgotPassword__VerifyCode';
import ForgotPassWord__CreateNewPass from '@screens/Auth/ForgotPassword/ForgotPassWord__CreateNewPass';
// import LoginWithGoogle from '@screens/Auth/Login/Google';
// import LoginWithFacebook from '@screens/Auth/Login/Facebook';
// import LoginWithAppleId from '@screens/Auth/Login/Apple';

export const renderAuthStack = () => {
  return (
    <>
      {/* Login */}
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="LoginWithEmail" component={LoginWithEmail} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="AccountSetup" component={AccountSetup} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <RootStack.Screen
        name="ForgotPassword__VerifyCode"
        component={ForgotPassword__VerifyCode}
      />
      <RootStack.Screen
        name="ForgotPassWord__CreateNewPass"
        component={ForgotPassWord__CreateNewPass}
      />
      {/* <RootStack.Screen name="LoginWithGoogle" component={LoginWithGoogle} />
      <RootStack.Screen
        name="LoginWithFacebook"
        component={LoginWithFacebook}
      />
      <RootStack.Screen name="LoginWithAppleId" component={LoginWithAppleId} /> */}

      {/* Register */}
      {/* <RootStack.Screen name="Register" component={RegisterFormScreen} />
      <RootStack.Screen
        name="RegisterVerifyOTP"
        component={RegisterVerifyOTPScreen}
      /> */}

      {/* Forgot password */}
      {/* <RootStack.Screen
        name="ForgotPasswordInputPhoneNumber"
        component={ForgotPasswordScreen}
      />
      <RootStack.Screen
        name="ForgotPasswordVerifyOTP"
        component={ForgotPasswordVerifyOTPScreen}
      />
      <RootStack.Screen
        name="ForgotPasswordConfirmPassword"
        component={ForgotPasswordConfirmPasswordScreen}
      /> */}
    </>
  );
};
