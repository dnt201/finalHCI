import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {CompositeNavigationProp} from '@react-navigation/native';
import {IBottomParamList, IRootStackParamList} from '@navigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {VStack, Text, ScrollView, HStack, Box, Pressable} from 'native-base';
import logo from '@assets/images/logo.png';
import {Cart, EmptyCard, Magnify, More} from '@icons';
import {listItemCart} from '@screens/Cart/listItemCart';
import Active from './Active';
import Complete from './Complete';

type iNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Orders'>,
  NativeStackNavigationProp<IRootStackParamList, 'TrackOrder'>
>;

interface iOrderScreen {
  navigation: iNavigationProps;
}

const OrderScreen: React.FC<iOrderScreen> = props => {
  const {navigation} = props;

  const [select, setSelect] = useState(0);
  return (
    <VStack h={'100%'} pt={4}>
      <VStack w={'100%'} h={'100%'} space={16} px={2}>
        <View style={styles.orderScreen__header}>
          <Image
            source={logo}
            style={styles.orderScreen__header__image}
            alt="logo"
          />
          <Text flex={1} fontWeight={600} fontSize={20}>
            My Order
          </Text>
          <HStack space={'8px'}>
            <TouchableOpacity>
              <Magnify />
            </TouchableOpacity>
            <TouchableOpacity>
              <More />
            </TouchableOpacity>
          </HStack>
        </View>

        <HStack>
          <Pressable
            style={{flex: 1}}
            alignItems={'center'}
            flex={1}
            display={'flex'}
            borderBottomWidth={select === 0 ? 2 : 1}
            borderBottomColor={select === 0 ? '#000' : '#9f9f9f'}
            py={2}
            onPress={() => setSelect(0)}>
            <Text
              fontSize={16}
              fontWeight={select === 0 ? 600 : 400}
              color={select === 0 ? '#000' : '#9f9f9f'}>
              Active
            </Text>
          </Pressable>
          <Pressable
            style={{flex: 1}}
            alignItems={'center'}
            flex={1}
            display={'flex'}
            borderBottomWidth={select === 1 ? 2 : 1}
            borderBottomColor={select === 1 ? '#000' : '#9f9f9f'}
            py={2}
            onPress={() => setSelect(1)}>
            <Text
              fontSize={16}
              fontWeight={select === 1 ? 600 : 400}
              color={select === 1 ? '#000' : '#9f9f9f'}>
              Complete
            </Text>
          </Pressable>
        </HStack>
        <ScrollView style={{flex: 1}}>
          {select === 0 ? (
            <Active nav={() => navigation.navigate('TrackOrder', {step: 2})} />
          ) : (
            <Complete
              nav={() => navigation.navigate('TrackOrder', {step: 4})}
            />
          )}
        </ScrollView>
      </VStack>
    </VStack>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  orderScreen__container: {
    paddingHorizontal: 8,
    paddingTop: 16,
    height: '100%',
  },
  orderScreen__header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  orderScreen__header__title: {},
  orderScreen__header__image: {
    width: 24,
    height: 24,
  },
});
