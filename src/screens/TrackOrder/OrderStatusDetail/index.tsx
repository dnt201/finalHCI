import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Checked,
  HandShake,
  Package,
  PackageOpen,
  Truck,
  CheckCircle,
} from '@icons';
import {Box, Center, HStack, VStack, Text, Circle} from 'native-base';
import {colors} from '@common/styles';

const OrderStatusDetail: React.FC<{step: number}> = ({step}) => {
  return (
    <VStack space={'8px'} w={'100%'} alignItems={'flex-start'}>
      {listOrderStatus.map((item, i) => (
        <React.Fragment key={item.time}>
          {i !== 0 ? (
            <Box flex={1} h={'16px'} ml={'14px'} bgColor="#2e2e2e" w={1}></Box>
          ) : null}
          <HStack alignItems={'center'} space={'12px'} w={'100%'}>
            <Circle size={'30px'} borderWidth={2} borderColor={'#2e2e2e'}>
              <Circle size={'12px'} bgColor={'#2e2e2e'} />
            </Circle>
            <VStack flex={1}>
              <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                {item.title} 12412 2 12
              </Text>
              <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                {item.subTitle}{' '}
              </Text>
            </VStack>
            <Text fontSize={13} fontWeight={300}>
              {item.time}
            </Text>
          </HStack>
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default OrderStatusDetail;

const styles = StyleSheet.create({});

interface iOrderStatus {
  title: string;
  subTitle: string;
  time: string;
}
const listOrderStatus: iOrderStatus[] = [
  {
    title: 'Order In Transit - Dec 17',
    subTitle: '32 Manchester Ave. Ringgold. GA 30736',
    time: '15:20 PM',
  },
  {
    title: 'Order ... Customs Port - Dec 16',
    subTitle: '4 Evergreen Street Lake Zurich. IL 60047',
    time: '14:40 PM',
  },
  {
    title: 'Order are ...Shipped - Dec 15',
    subTitle: '9177 Hillcrest Street Wheeling. WV 26003',
    time: '11:30 AM',
  },
  {
    title: 'Order is in Packing - Dec 15',
    subTitle: '891 Glen Ridge St. Gainesville, VA 20155',
    time: '10:25 AM',
  },
  {
    title: 'Verified Payment - Dec 15',
    subTitle: '55 Summerhouse Dr. Apopka, FL 32703',
    time: '10:04 AM',
  },
];
