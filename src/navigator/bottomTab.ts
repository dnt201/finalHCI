import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type IBottomParamList = {
  Home: undefined;
  Cart: undefined;
  Orders: undefined;
  Wallet: undefined;
  Profile: undefined;
};

export const RootBottomTab = createBottomTabNavigator<IBottomParamList>();
