import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {Box, Center, HStack, ScrollView, VStack, Text} from 'native-base';
import {listPromo, setPromo} from '@redux/slices/checkout';
import {Gift} from '@icons';

interface iCheckout__AddPromo
  extends NativeStackScreenProps<IRootStackParamList, 'Checkout__AddPromo'> {}

const Checkout__ChoseShipping: React.FC<iCheckout__AddPromo> = props => {
  const {promo} = useAppSelector(state => state.checkout);
  const dispatch = useAppDispatch();

  return (
    <HeaderBackLayout
      title="Add your promo"
      goBack={() => props.navigation.goBack()}>
      <ScrollView>
        <VStack space={'16px'} pt={'12px'}>
          {listPromo.map((item, i) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => dispatch(setPromo(i))}>
              <HStack
                alignItems={'center'}
                p={4}
                bgColor="#fff"
                rounded={'20px'}
                space={8}>
                <Box p={'8px'} rounded="full" bgColor={'#2e2e2e'}>
                  <Gift fill="#fff" />
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
                  <TouchableOpacity onPress={() => dispatch(setPromo(i))}>
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
                          promo !== undefined && promo.name === item.name
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
