import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {listAddress, listShipping, setShipPing} from '@redux/slices/checkout';
import {Box, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import {BoxSvg, Location, Truck} from '@icons';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';

interface iCheckout__ChoseShipping
  extends NativeStackScreenProps<
    IRootStackParamList,
    'Checkout__ChoseShipping'
  > {}

const Checkout__ChoseShipping: React.FC<iCheckout__ChoseShipping> = props => {
  const {shipping} = useAppSelector(state => state.checkout);
  const dispatch = useAppDispatch();

  return (
    <HeaderBackLayout
      title="Chose Shipping"
      goBack={() => props.navigation.goBack()}>
      <ScrollView>
        <VStack space={'16px'} pt={'12px'}>
          {listShipping.map((item, i) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => dispatch(setShipPing(i))}>
              <HStack
                alignItems={'center'}
                p={4}
                bgColor="#fff"
                rounded={'20px'}
                space={8}>
                <Box p={'8px'} rounded="full" bgColor={'#2e2e2e'}>
                  {i === 1 ? <BoxSvg fill={'#fff'} /> : <Truck fill={'#fff'} />}
                </Box>

                <VStack flex={1}>
                  <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                    {item.detail}
                  </Text>
                </VStack>
                <HStack space={4} alignItems={'center'}>
                  <Text fontSize={14} fontWeight={600}>
                    $ {item.amount}
                  </Text>
                  <TouchableOpacity onPress={() => dispatch(setShipPing(i))}>
                    <Center
                      w={16}
                      rounded="full"
                      h={16}
                      borderWidth={1}
                      borderColor={'#2e2e2e'}>
                      <Box
                        w={8}
                        rounded="full"
                        h={8}
                        bgColor={
                          shipping !== undefined && shipping.name === item.name
                            ? '#2e2e2e'
                            : 'transparent'
                        }
                      />
                    </Center>
                  </TouchableOpacity>
                </HStack>
              </HStack>
            </TouchableOpacity>
          ))}
        </VStack>
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default Checkout__ChoseShipping;

const styles = StyleSheet.create({});
