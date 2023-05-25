import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, HStack, Text, VStack, View} from 'native-base';
import {Edit, Location} from '@icons';
import {colors} from '@common/styles';
import {useAppSelector} from '@hooks/useRedux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';

interface iCheckout
  extends NativeStackScreenProps<IRootStackParamList, 'Checkout'> {}

type chose = {nav: iCheckout};
const ChoseAddress: React.FC<chose> = props => {
  const {address} = useAppSelector(state => state.checkout);
  console.log(address);
  return (
    <TouchableOpacity
      onPress={() =>
        props.nav.navigation.navigate('Checkout__ShippingAddress')
      }>
      <HStack
        alignItems={'center'}
        p={4}
        bgColor="#fff"
        rounded={'20px'}
        space={8}>
        <Box p={'8px'} rounded="full" bgColor={colors.BORDER}>
          <Box p={'4px'} rounded="full" bgColor={'#2e2e2e'}>
            <Location fill={'#fff'} />
          </Box>
        </Box>
        {address === undefined ? (
          <Text>Chose your addres</Text>
        ) : (
          <>
            <VStack flex={1}>
              <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                {address.name}
              </Text>
              <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                {address.detail}
              </Text>
            </VStack>
            <TouchableOpacity>
              <Edit />
            </TouchableOpacity>
          </>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default ChoseAddress;

const styles = StyleSheet.create({});
