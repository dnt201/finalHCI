import { RootStack } from '@navigator';
import Notify from '@screens/Notify';
import React from 'react';
// import NotifyDetail from '@screens/Notify/DetailScreen';
// import NotifyList from '@screens/Notify/MainScreen';

export const renderStackNotify = () => {
  return (
    <>
      <RootStack.Screen name="Notify" component={Notify} />
      {/* <RootStack.Screen name="NotifyList" component={NotifyList} /> */}
    </>
  );
};
