// @ts-nocheck
import React from 'react';
import {RootStack} from '@navigator';
import Profile__Index from '@screens/Profile__Index';
import Profile__Update from '@screens/Profile__Update';
export const renderProfileStack = () => {
  return (
    <>
      <RootStack.Screen name="EditProfile" component={Profile__Index} />
      <RootStack.Screen
        name="EditProfile__Update"
        component={Profile__Update}
      />

      {/* <RootStack.Screen name="Help" component={Help} />
      <RootStack.Screen name="Payment" component={Payment} />
      <RootStack.Screen name="SelectLanguage" component={SelectLanguage} />
      <RootStack.Screen name="Location" component={Location} />
      <RootStack.Screen name="SecurityPolicy" component={SecurityPolicy} />
      <RootStack.Screen name="TermsOfService" component={TermsOfService} />
      <RootStack.Screen name="GoogleMap" component={GoogleMapScreen} />
      <RootStack.Screen name="AddBankAccount" component={AddBankAccount} />
      <RootStack.Screen name="AddEWallet" component={AddEWallet} /> */}
    </>
  );
};
