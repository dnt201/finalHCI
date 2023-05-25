import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import logo from '@assets/images/logo.png';
import {Cart, EmptyCard, Magnify} from '@icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {iItemCart, listItemCart} from './listItemCart';
import ItemCart from './Item';
import {Text, HStack, VStack, Box} from 'native-base';
import {colors, height} from '@common/styles';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {IBottomParamList, IRootStackParamList} from '@navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const changeValueByName = (
  array: iItemCart[],
  name: string,
  newValue: number,
) => {
  array.forEach(obj => {
    if (obj.name === name) {
      obj.countNum = newValue; // Update the desired property
    }
  });
};

type iNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Cart'>,
  NativeStackNavigationProp<IRootStackParamList, 'Checkout'>
>;
interface iCartScreen {
  navigation: iNavigationProps;
}

const CartScreen: React.FC<iCartScreen> = props => {
  const [listItem, setListItem] = useState(listItemCart);
  return (
    <VStack h={'100%'}>
      <ScrollView style={styles.cartScreen__container}>
        <VStack w={'100%'} space={16} px={2}>
          <View style={styles.cartScreen__header}>
            <Image
              source={logo}
              style={styles.cartScreen__header__image}
              alt="logo"
            />
            <Text flex={1} fontWeight={600} fontSize={20}>
              My Cart
            </Text>
            <TouchableOpacity>
              <Magnify />
            </TouchableOpacity>
          </View>
          {listItem.length === 0 ? (
            <VStack alignItems={'center'}>
              <EmptyCard />
              <Text fontSize={16} fontWeight={500} pt={4}>
                Your cart don't have anything!
              </Text>
              <Text fontSize={12} fontWeight={300}>
                Let's fill full of your cart NOW...
              </Text>
            </VStack>
          ) : (
            <VStack space={'16px'} pb={'26px'}>
              {listItem.map(item => (
                <ItemCart
                  {...item}
                  key={item.name}
                  setNumCount={n => {
                    const temp = [...listItem];
                    changeValueByName(temp, item.name, n);
                    setListItem(temp);
                  }}
                  listItem={listItem}
                  removeItem={() => {
                    setListItem(listItem.filter(cur => cur.name !== item.name));
                  }}
                />
              ))}
            </VStack>
          )}
        </VStack>
      </ScrollView>

      <HStack
        h={'80px'}
        px={'12px'}
        roundedTop={'20px'}
        bgColor={'#fff'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <VStack flex={2}>
          <Text fontSize={12}>Total price</Text>
          <Text fontSize={16} fontWeight={600}>
            ${' '}
            {listItem
              .reduce((pre, cur) => pre + cur.countNum * cur.price, 0)
              .toFixed(2)}
          </Text>
        </VStack>
        <TouchableOpacity
          disabled={listItem.length === 0}
          style={{flex: 3, marginRight: 8}}
          onPress={() => {
            props.navigation.navigate('Checkout');
          }}>
          <HStack
            rounded={15}
            bgColor={listItem.length === 0 ? '#9a9a9a' : '#000'}
            px={4}
            py={2}
            space={8}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text color="#fff" fontSize={14} fontWeight={600}>
              Checkout
            </Text>
            <Cart fill={'#fff'} stroke={'#fff'} />
          </HStack>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreen__container: {
    paddingHorizontal: 8,
    paddingTop: 16,
    height: '100%',
  },
  cartScreen__header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  cartScreen__header__title: {},
  cartScreen__header__image: {
    width: 24,
    height: 24,
  },
});
