import React from 'react';

import {IRootStackParamList} from '@navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import DeliveryDetail from './Delivery';

interface IDetailScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'OrderDetail'> {}

const DetailScreen: React.FC<IDetailScreenProps> = ({navigation}) => {
  const navigateToBooking = () => navigation.navigate('Booking', {id: '1'});
  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title="Trạng thái đơn">
      <DeliveryDetail navigateToBooking={navigateToBooking} />
    </ScreenWithBackLayout>
  );
};

export default DetailScreen;
