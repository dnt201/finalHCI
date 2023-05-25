import {RootStack} from '@navigator';
import Checkout from '@screens/Checkout';
import Checkout__AddPromo from '@screens/Checkout__AddPromo';
import Checkout__ChoseShipping from '@screens/Checkout__ChoseShipping';
import Checkout__ShippingAddress from '@screens/Checkout__ShippingAddress';
import TrackOrder from '@screens/TrackOrder';
import React from 'react';
// import BookingScreen from '@screens/Order/BookingScreen';
// import Order from '@screens/Order/NewDesign';

export const renderStackOrder = () => {
  return (
    <>
      <RootStack.Screen name="Checkout" component={Checkout} />
      <RootStack.Screen
        name="Checkout__ShippingAddress"
        component={Checkout__ShippingAddress}
      />
      <RootStack.Screen
        name="Checkout__ChoseShipping"
        component={Checkout__ChoseShipping}
      />
      <RootStack.Screen
        name="Checkout__AddPromo"
        component={Checkout__AddPromo}
      />
      <RootStack.Screen name="TrackOrder" component={TrackOrder} />
      {/* <RootStack.Screen name="ChoseShipping" component={Checkout} /> */}
      {/* <RootStack.Screen name="AddPromo" component={Checkout} /> */}
      {/* <RootStack.Screen name="OrderDetail" component={OrderDetail} /> */}
      {/* <RootStack.Screen name="Order" component={Order} />
      <RootStack.Screen name="Booking" component={BookingScreen} /> */}
    </>
  );
};
