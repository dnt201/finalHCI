import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Input,
  ScrollView,
  Square,
  Text,
  VStack,
  View,
} from 'native-base';
import {colors, height} from '@common/styles';
import {ArrowBack, Cart, HaftStar, Hearth} from '@icons';
import {listColor} from './ListColor';
interface iProduct__Detail
  extends NativeStackScreenProps<IRootStackParamList, 'Product__Detail'> {}

const Product__Detail: React.FC<iProduct__Detail> = ({navigation, route}) => {
  const desStr =
    'The GloPro X1 Smart Fitness Tracker features a sleek and lightweight design that comfortably fits on your wrist, allowing you to wear it throughout the day. Equipped with advanced sensors, it effortlessly tracks your daily activity, including steps taken, distance traveled, calories burned, and even monitors your heart rate in real-time.';
  const [viewMore, setViewMore] = useState(true);
  const [curSize, setCurSize] = useState(0);
  const [curColor, setCurColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView
      display="flex"
      flexDirection={'column'}
      minHeight={'100%'}
      w={'100%'}>
      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={() => navigation.goBack()}>
        <ArrowBack height={20} />
      </TouchableOpacity>
      <Square width={'100%'} height={height / 3 - 20}>
        <Image style={styles.image} source={route.params.item.image} />
      </Square>
      <View bgColor={'#fff'} flex={1} minH={'100%'} pb={4} w={'100%'} px={4}>
        <HStack alignItems={'center'}>
          <Text
            flex={1}
            py={'12px'}
            numberOfLines={2}
            color="#2e2e2e"
            fontSize={'24px'}
            fontWeight={'600'}>
            {route.params.item.name}
          </Text>
          <TouchableOpacity style={styles.likeBtn}>
            <Hearth />
          </TouchableOpacity>
        </HStack>
        <HStack color="#000" alignItems={'center'} space={16}>
          <Box px={2} py={1} rounded={8} bgColor={colors.BORDER}>
            <Text fontSize={'11px'}>{route.params.item.sold} sold</Text>
          </Box>
          <HStack alignItems={'center'}>
            <Box w={'24px'} h={'24px'}>
              <HaftStar />
            </Box>
            <Text>
              {route.params.item.rating} {'(2341 reviews)'}
            </Text>
          </HStack>
        </HStack>
        <Box w={'100%'} h={'1px'} bgColor={colors.BORDER} my={4} />
        <VStack mb={1}>
          <Text fontSize={16} fontWeight={'500'}>
            Description
          </Text>
          <Text my={1} fontSize={11}>
            {viewMore === false ? desStr.slice(0, 35) + '...' : desStr}
            <TouchableOpacity
              onPress={() =>
                viewMore === false ? setViewMore(true) : setViewMore(false)
              }>
              <Text
                color={'#2e2e2e'}
                fontWeight={'600'}
                textDecorationLine={'underline'}>
                {viewMore === false ? ' View more' : ' Hide'}
              </Text>
            </TouchableOpacity>
          </Text>
        </VStack>
        <VStack>
          <Text pb={1} fontSize={16} fontWeight={'500'}>
            Size
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(10).keys()).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurSize(index)}
                style={styles.touchBtn}>
                <Square
                  rounded={100}
                  bgColor={curSize === index ? '#2e2e2e' : '#fff'}
                  borderWidth={1}
                  size={36}>
                  <Text color={curSize === index ? '#fff' : '#2e2e2e'}>
                    {35 + index}
                  </Text>
                </Square>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </VStack>
        <VStack mt={2}>
          <Text pb={1} fontSize={16} fontWeight={'500'}>
            Color
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {listColor.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurColor(index)}
                style={styles.touchBtn}>
                <Square
                  rounded={100}
                  size={36}
                  borderWidth={color.includes('FFF') ? 1 : 0}
                  bgColor={color}>
                  {curColor === index ? (
                    <CheckIcon
                      size={16}
                      color={color.includes('FFF') ? '#2e2e2e' : '#fff'}
                    />
                  ) : null}
                </Square>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </VStack>

        <HStack mt={4} alignItems={'center'} space={16}>
          <Text pb={1} fontSize={16} fontWeight={'500'}>
            Quantity
          </Text>
          <HStack alignItems={'center'}>
            <Pressable
              onPress={() =>
                setQuantity(pre => {
                  if (pre > 1) return pre - 1;
                  return pre;
                })
              }>
              <Box
                h={'36px'}
                roundedBottomLeft={12}
                roundedTopLeft={12}
                backgroundColor={'#f0f0f0'}
                px={2}>
                <Text fontSize={20}>-</Text>
              </Box>
            </Pressable>
            <Input
              value={quantity.toString()}
              onChangeText={text => {
                if (parseInt(text)) setQuantity(parseInt(text));
              }}
              textAlign={'center'}
              w={40}
              h={'36px'}
              variant={'unstyled'}
              rounded={0}
              backgroundColor={'#f0f0f0'}
            />
            <Pressable onPress={() => setQuantity(pre => pre + 1)}>
              <Box
                h={'36px'}
                px={2}
                roundedBottomRight={12}
                roundedTopRight={12}
                backgroundColor={'#f0f0f0'}>
                <Text fontSize={20}>+</Text>
              </Box>
            </Pressable>
          </HStack>
        </HStack>
        <Box w={'100%'} h={'1px'} bgColor={colors.BORDER} my={4} />

        <HStack>
          <VStack flex={2}>
            <Text fontSize={'11px'} color={colors.BODY}>
              Total price
            </Text>
            <Text fontSize={16} fontWeight={'600'}>
              $ {route.params.item.price * quantity}
            </Text>
          </VStack>
          <TouchableOpacity style={styles.addToCart}>
            <Cart fill={'#fff'} />
            <Text color={'#fff'} fontWeight={'500'}>
              {' '}
              Add to cart
            </Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </ScrollView>
  );
};

export default Product__Detail;

const styles = StyleSheet.create({
  arrowBtn: {
    padding: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
  likeBtn: {
    padding: 2,
  },
  touchBtn: {
    marginRight: 8,
  },
  addToCart: {
    backgroundColor: '#000',
    flex: 5,
    display: 'flex',
    paddingHorizontal: 4,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    gap: 4,
  },
});
