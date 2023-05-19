import React from 'react';
import {RootBottomTab} from '@navigator';
import MyTabBar from '@components/MyBottomTabBar';
import HomeScreen from '@screens/Home';
import CartScreen from '@screens/Cart';
import OrderScreen from '@screens/Order';
import WalletScreen from '@screens/Wallet';
import ProfileScreen from '@screens/Profile';
// import ActivityScreen from '@screens/Activity';
// import VoucherScreen from '@screens/Voucher';
// import AccountScreen from '@screens/Account/MainScreen';
// import CartScreen from '@screens/Cart/MainScreen';
// import MyTabBar from '@components/MyBottomTabBar';

const BottomTab = () => {
  return (
    <RootBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <RootBottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <RootBottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
        }}
      />
      <RootBottomTab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          title: 'Orders',
        }}
      />
      <RootBottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet',
        }}
      />

      <RootBottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </RootBottomTab.Navigator>
  );
};

export default BottomTab;
