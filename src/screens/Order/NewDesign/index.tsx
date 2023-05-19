import {Box, ScrollView} from 'native-base';
import React from 'react';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {useNavigation} from '@react-navigation/native';
import StatusSection from './StatusSection';
import ShipperInformationSection from './ShipperInformationSection';
import LocationCard from '@components/OrderLocationCard';
import TimeCard from '@components/OrderTimeCard';
import RestaurantSection from './RestaurantSection';

type Props = NativeStackNavigationProp<IRootStackParamList, 'OrderDetail'>;

const Order = () => {
  const navigation = useNavigation<Props>();
  const [step, setStep] = React.useState(2);
  return (
    <ScreenWithBackLayout
      noPaddingX={true}
      noInsidePaddingX={true}
      title="Trạng thái đơn"
      handleGoBack={() => navigation.goBack()}>
      <Box h="100%">
        <ScrollView>
          <StatusSection step={step} />
          <ShipperInformationSection pY="4" pX="4" mT="4" />
          <LocationCard px="4" pt="4" pb="2" />
          <TimeCard px="4" pt="2" pb="4" />
          <RestaurantSection />
        </ScrollView>
      </Box>
    </ScreenWithBackLayout>
  );
};

export default Order;
