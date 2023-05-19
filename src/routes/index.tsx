import React from 'react';
import {RootStack} from '@navigator';
import WelcomeScreen from '@screens/Welcome';
import {renderMainStack} from './component/main';
import {renderAuthStack} from './component/auth';
import {useAppSelector} from '@hooks/useRedux';
export const RootApp = () => {
  const {isDoneFirstTime, user} = useAppSelector(state => state.auth);

  const renderAllScreen = () => {
    if (!isDoneFirstTime) {
      return <RootStack.Screen name="Welcome" component={WelcomeScreen} />;
    }
    if (user === null) {
      return renderAuthStack();
    }

    return renderMainStack();
  };

  return (
    <RootStack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      {renderAllScreen()}
    </RootStack.Navigator>
  );
};
