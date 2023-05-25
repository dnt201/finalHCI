// @ts-nocheck
import React from 'react';
import { RootStack } from '@navigator';
import Category__Detail from '@screens/Category__Detail';
import Product__MostPopular from '@screens/Product__MostPopular';
export const renderHomeStack = () => {
  return (
    <>
      <RootStack.Screen name="Category__Detail" component={Category__Detail} />
      <RootStack.Screen
        name="Product__MostPopular"
        component={Product__MostPopular}
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
