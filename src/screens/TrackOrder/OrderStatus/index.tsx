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
import {Box, Center, HStack, VStack, Text} from 'native-base';
import {colors} from '@common/styles';

const OrderStatus: React.FC<{step: number}> = ({step}) => {
  return (
    <VStack alignItems={'center'} space={'8px'}>
      <HStack alignItems={'flex-end'}>
        <VStack justifyContent={'center'} px={3}>
          <Package width={20} height={20} />
          <CheckCircle width={20} height={20} />
        </VStack>
        <Box
          h={1}
          mb={'9px'}
          flex={1}
          bgColor={step >= 2 ? '#2e2e2e' : '#9f9f9f'}
        />
        <VStack justifyContent={'center'} px={3}>
          <Truck fill={step >= 2 ? '#2e2e2e' : '#9f9f9f'} />
          <CheckCircle
            fill={step >= 2 ? '#2e2e2e' : '#9f9f9f'}
            width={20}
            height={20}
          />
        </VStack>
        <Box
          h={1}
          mb={'9px'}
          flex={1}
          bgColor={step >= 3 ? '#2e2e2e' : '#9f9f9f'}
        />

        <VStack justifyContent={'center'} px={3}>
          <HandShake fill={step >= 3 ? '#2e2e2e' : '#9f9f9f'} />
          <CheckCircle
            fill={step >= 3 ? '#2e2e2e' : '#9f9f9f'}
            width={20}
            height={20}
          />
        </VStack>
        <Box
          h={1}
          mb={'9px'}
          flex={1}
          bgColor={step >= 4 ? '#2e2e2e' : '#9f9f9f'}
        />

        <VStack justifyContent={'center'} px={3}>
          <PackageOpen fill={step >= 4 ? '#2e2e2e' : '#9f9f9f'} />
          <CheckCircle
            fill={step >= 4 ? '#2e2e2e' : '#9f9f9f'}
            width={20}
            height={20}
          />
        </VStack>
      </HStack>
      <Text fontSize={14} fontWeight={600}>
        {step === 1
          ? 'Prepare packet'
          : step === 2
          ? 'Packet in Delivery'
          : step === 3
          ? 'Packet has been received '
          : step === 4
          ? 'Order has been success'
          : ''}
      </Text>
      <Box h={1} my={'12px'} w={'100%'} bgColor={colors.BORDER} />
    </VStack>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({});
