import {StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {CashFill, ChevronRight, Magnify, More} from '@icons';
import {listItemCart} from '@screens/Cart/listItemCart';
import ItemCheckout from './ItemCheckout';
import {Box, HStack, Text, ScrollView, VStack} from 'native-base';
import {colors} from '@common/styles';
import ChoseAddress from './ChoseAddress';
import ChoseShipping from './ChoseShipping';
import {useAppSelector} from '@hooks/useRedux';
import {useAppDispatch} from '@hooks/useRedux';
import {resetAll} from '@redux/slices/checkout';
import ChosePromo from './ChosePromo';

interface iCheckout
  extends NativeStackScreenProps<IRootStackParamList, 'Checkout'> {}

const Checkout: React.FC<iCheckout> = props => {
  const {navigation} = props;
  const {shipping, promo} = useAppSelector(state => state.checkout);
  const dispatch = useAppDispatch();

  return (
    <HeaderBackLayout
      goBack={() => navigation.goBack()}
      title="Checkout"
      leftElement={<More />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={'12px'}>
          <Text fontSize={18} fontWeight={600}>
            Shipping Address
          </Text>
          <ChoseAddress nav={props} />
          <Text fontSize={18} fontWeight={600}>
            Order List
          </Text>
          {listItemCart.map(item => (
            <ItemCheckout {...item} key={item.name} />
          ))}

          <Text fontSize={18} fontWeight={600}>
            Choose Shipping
          </Text>
          <ChoseShipping nav={props} />

          <Text fontSize={18} fontWeight={600}>
            Promo Code
          </Text>
          <ChosePromo nav={props} />
          <VStack p={4} space={'12px'} bgColor={'#fff'} rounded={12}>
            <HStack flex={1} justifyContent={'space-between'}>
              <Text>Amount</Text>
              <Text fontSize={14}>${444}</Text>
            </HStack>
            <HStack flex={1} justifyContent={'space-between'}>
              <Text fontSize={14}>Shipping</Text>
              <Text>
                {shipping !== undefined ? `$${shipping.amount}` : '-'}
              </Text>
            </HStack>

            <HStack flex={1} justifyContent={'space-between'}>
              <Text fontSize={14}>Shipping</Text>
              <Text>
                {promo !== undefined
                  ? `-$${((promo.discountPercent * 444) / 100).toFixed(2)}`
                  : '-'}
              </Text>
            </HStack>

            <Box w={'100%'} h={1} bgColor={colors.BORDER}></Box>
            <HStack flex={1} justifyContent={'space-between'}>
              <Text>Total</Text>
              <Text fontSize={14}>
                {shipping !== undefined && promo !== undefined
                  ? `$${(
                      shipping.amount +
                      444 -
                      (444 * promo.discountPercent) / 100
                    ).toFixed(2)}`
                  : shipping !== undefined && promo === undefined
                  ? `$${shipping.amount + 444}`
                  : '-'}
              </Text>
            </HStack>
          </VStack>
        </VStack>
        <TouchableOpacity disabled={shipping === undefined}>
          <HStack
            p={3}
            mt={4}
            rounded={'16  px'}
            bgColor={shipping === undefined ? colors.BODY : '#000'}
            justifyContent="center"
            alignItems="center"
            space={8}>
            <Text fontSize={16} fontWeight={600} color={'#fff'}>
              Continue to payment
            </Text>
            <CashFill fill={'#fff'} />
          </HStack>
        </TouchableOpacity>
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
