import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {CompositeNavigationProp} from '@react-navigation/native';
import {IBottomParamList, IRootStackParamList} from '@navigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  VStack,
  Text,
  ScrollView,
  HStack,
  Box,
  Pressable,
  Center,
} from 'native-base';
import logo from '@assets/images/logo.png';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowDown,
  Cart,
  EmptyCard,
  Magnify,
  More,
  WalletFill,
} from '@icons';
import {listItemCart} from '@screens/Cart/listItemCart';
import bg from '@assets/images/bg.png';
import MasterCard from '@assets/images/mastercard.png';
type iNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Wallet'>,
  NativeStackNavigationProp<IRootStackParamList, 'TrackOrder'>
>;

import shirt1 from '@assets/images/Shirt/shirt1.png';
import shoes2 from '@assets/images/Shoes/shoes2.png';
import shoes1 from '@assets/images/Shoes/shoes1.png';
import {colors} from '@common/styles';

interface iOrderScreen {
  navigation: iNavigationProps;
}

const Wallet: React.FC<iOrderScreen> = props => {
  const {navigation} = props;

  const [select, setSelect] = useState(0);
  return (
    <VStack h={'100%'} pt={4}>
      <VStack w={'100%'} h={'100%'} space={16} px={4}>
        <View style={styles.orderScreen__header}>
          <Image
            source={logo}
            style={styles.orderScreen__header__image}
            alt="logo"
          />
          <Text flex={1} fontWeight={600} fontSize={20}>
            My E-Wallet
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

        <View style={styles.imgBg}>
          <Image
            style={{width: '100%', height: 200, borderRadius: 24}}
            source={bg}
          />
          <HStack
            position="absolute"
            left={4}
            top={'15%'}
            width={'90%'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <VStack>
              <Text fontSize={24} fontWeight={600} color={'#fff'}>
                Duy Nhã Trần
              </Text>
              <Text fontSize={12} fontWeight={500} color={'#fff'}>
                {' '}
                **** **** **** 2001
              </Text>
            </VStack>
            <Image
              style={{
                height: 32,
                width: 52,
              }}
              source={MasterCard}
            />
          </HStack>

          <HStack
            position="absolute"
            left={4}
            bottom={'15%'}
            width={'90%'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <VStack>
              <Text fontSize={14} fontWeight={500} color={'#fff'}>
                Your balance
              </Text>
              <Text fontSize={32} fontWeight={600} color={'#fff'}>
                $ 9,425
              </Text>
            </VStack>
            <TouchableOpacity>
              <HStack
                alignItems={'center'}
                px={4}
                py={2}
                bgColor="#fff"
                rounded={'16px'}
                space={6}>
                <ArrowDown stroke={'#2e2e2e'} />
                <Text fontSize={14} fontWeight={500} color={'#2e2e2e'}>
                  Top up
                </Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
        </View>

        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={18} fontWeight={600}>
            Transaction History
          </Text>
          <TouchableOpacity>
            <Text fontSize={13} fontWeight={600}>
              See all
            </Text>
          </TouchableOpacity>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <VStack space={20} pb={'12px'}>
            <HStack space={8} alignItems={'center'}>
              <Center bgColor={colors.BORDER} h={50} w={50} rounded="full">
                <Image style={styles.image} source={shirt1} />
              </Center>
              <VStack flex={1}>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  Áo thun Ranger 3 Retro
                </Text>
                <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                  May 15, 2023 | 16:42 PM
                </Text>
              </VStack>
              <VStack>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  $321
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                    Orders
                  </Text>
                  <ArrowCircleUp width={15} height={15} />
                </HStack>
              </VStack>
            </HStack>
            <HStack space={8} alignItems={'center'}>
              <Center bgColor={colors.BORDER} h={50} w={50} rounded="full">
                <Center h={35} w={35} bgColor={'#2e2e2e'} rounded="full">
                  <WalletFill fill={'#fff'} />
                </Center>
              </Center>
              <VStack flex={1}>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  Top Up Wallet
                </Text>
                <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                  May 14, 2023 | 16:42 PM
                </Text>
              </VStack>
              <VStack>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  $400
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                    Top Up
                  </Text>
                  <ArrowCircleDown width={15} height={15} />
                </HStack>
              </VStack>
            </HStack>
            <HStack space={8} alignItems={'center'}>
              <Center bgColor={colors.BORDER} h={50} w={50} rounded="full">
                <Image style={styles.image} source={shoes2} />
              </Center>
              <VStack flex={1}>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  Áo thun Ranger 3 Retro 12 12 12
                </Text>
                <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                  May 15, 2023
                </Text>
              </VStack>
              <VStack>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  $105
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                    Orders
                  </Text>
                  <ArrowCircleUp width={15} height={15} />
                </HStack>
              </VStack>
            </HStack>
            <HStack space={8} alignItems={'center'}>
              <Center bgColor={colors.BORDER} h={50} w={50} rounded="full">
                <Image style={styles.image} source={shoes1} />
              </Center>
              <VStack flex={1}>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  Áo thun Ranger 3 Retro 12 12 12
                </Text>
                <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                  May 15, 2023
                </Text>
              </VStack>
              <VStack>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  $205
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                    Orders
                  </Text>
                  <ArrowCircleUp width={15} height={15} />
                </HStack>
              </VStack>
            </HStack>
            <HStack space={8} alignItems={'center'}>
              <Center bgColor={colors.BORDER} h={50} w={50} rounded="full">
                <Center h={35} w={35} bgColor={'#2e2e2e'} rounded="full">
                  <WalletFill fill={'#fff'} />
                </Center>
              </Center>
              <VStack flex={1}>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  Top Up Wallet
                </Text>
                <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                  May 14, 2023 | 16:42 PM
                </Text>
              </VStack>
              <VStack>
                <Text numberOfLines={1} fontSize={16} fontWeight={600}>
                  $650
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text numberOfLines={1} fontSize={11} fontWeight={300}>
                    Top Up
                  </Text>
                  <ArrowCircleDown width={15} height={15} />
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  imgBg: {
    position: 'relative',
    width: '100%',
  },
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
  image: {
    width: 40,
    height: 40,
  },
});
