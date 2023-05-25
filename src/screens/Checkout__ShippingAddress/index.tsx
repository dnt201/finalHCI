import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {listAddress, setAddress} from '@redux/slices/checkout';
import {Box, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import {Location} from '@icons';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';

interface iCheckout__ShippingAddress
  extends NativeStackScreenProps<
    IRootStackParamList,
    'Checkout__ShippingAddress'
  > {}

const Checkout__ShippingAddress: React.FC<
  iCheckout__ShippingAddress
> = props => {
  const {address} = useAppSelector(state => state.checkout);
  const dispatch = useAppDispatch();
  return (
    <HeaderBackLayout
      title="Shipping Address"
      goBack={() => props.navigation.goBack()}>
      <ScrollView>
        <VStack pt={'12px'} space={'16px'}>
          {listAddress.map((item, i) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => dispatch(setAddress(i))}>
              <HStack
                alignItems={'center'}
                p={4}
                bgColor="#fff"
                rounded={'20px'}
                space={8}>
                <Box p={'8px'} rounded="full" bgColor={'#2e2e2e'}>
                  <Location fill={'#fff'} />
                </Box>

                <VStack flex={1}>
                  <Text fontSize={16} fontWeight={600} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text fontSize={13} fontWeight={300} numberOfLines={1}>
                    {item.detail}
                  </Text>
                </VStack>
                <HStack>
                  <TouchableOpacity onPress={() => dispatch(setAddress(i))}>
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
                          address !== undefined && address.name === item.name
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

export default Checkout__ShippingAddress;

const styles = StyleSheet.create({});
