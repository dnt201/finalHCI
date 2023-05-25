import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, HStack, Text, VStack, View} from 'native-base';
import {ChevronRight, Edit, Location, Truck} from '@icons';
import {colors} from '@common/styles';
import {useAppSelector} from '@hooks/useRedux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';

interface iCheckout
  extends NativeStackScreenProps<IRootStackParamList, 'Checkout'> {}

type chose = {nav: iCheckout};
const ChoseShipping: React.FC<chose> = props => {
  const {shipping} = useAppSelector(state => state.checkout);
  return (
    <TouchableOpacity
      onPress={() => props.nav.navigation.navigate('Checkout__ChoseShipping')}>
      <HStack
        alignItems={'center'}
        p={4}
        bgColor="#fff"
        rounded={'20px'}
        space={8}>
        <Box p={'8px'} rounded="full" bgColor={colors.BORDER}>
          <Truck />
        </Box>
        {shipping === undefined ? (
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            flex={1}>
            <Text fontSize={14} fontWeight={600}>
              Chose shipping method
            </Text>
            <ChevronRight />
          </HStack>
        ) : (
          <>
            <VStack flex={1}>
              <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                {shipping.name}
              </Text>
              <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                {shipping.detail}
              </Text>
            </VStack>
            <HStack alignItems={'center'} space={4}>
              <Text fontSize={16} fontWeight={600}>
                ${shipping.amount}
              </Text>
              <Edit />
            </HStack>
          </>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default ChoseShipping;

const styles = StyleSheet.create({});
