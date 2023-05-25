import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, HStack, Text, VStack, View} from 'native-base';
import {ChevronRight, Edit, Gift, Location, Truck} from '@icons';
import {colors} from '@common/styles';
import {useAppSelector} from '@hooks/useRedux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';

interface iCheckout
  extends NativeStackScreenProps<IRootStackParamList, 'Checkout'> {}

type chose = {nav: iCheckout};
const ChosePromo: React.FC<chose> = props => {
  const {promo} = useAppSelector(state => state.checkout);
  return (
    <TouchableOpacity
      onPress={() => props.nav.navigation.navigate('Checkout__AddPromo')}>
      <HStack
        alignItems={'center'}
        p={4}
        bgColor="#fff"
        rounded={'20px'}
        space={8}>
        <Box p={'8px'} rounded="full" bgColor={colors.BORDER}>
          <Gift fill={'#2e2e2e'} stroke={colors.BORDER} />
        </Box>
        {promo === undefined ? (
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            flex={1}>
            <Text fontSize={14} fontWeight={600}>
              Add your promo
            </Text>
            <ChevronRight />
          </HStack>
        ) : (
          <>
            <VStack flex={1}>
              <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                {promo.name}
              </Text>
              <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                {promo.detail}
              </Text>
            </VStack>
            <HStack alignItems={'center'} space={4}>
              <Edit />
            </HStack>
          </>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default ChosePromo;

const styles = StyleSheet.create({});
