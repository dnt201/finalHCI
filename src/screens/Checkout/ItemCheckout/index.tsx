import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Input,
  Modal,
  Button,
} from 'native-base';
import {colors, height, width} from '@common/styles';
import {Trash, TrashFill} from '@icons';
import {iItemCart} from '@screens/Cart/listItemCart';

interface iItemCheckoutProps extends iItemCart {}
const ItemCheckout: React.FC<iItemCheckoutProps> = props => {
  return (
    <HStack
      position={'relative'}
      w={'100%'}
      space={'12px'}
      p={3}
      bgColor={'#fff'}
      rounded={12}>
      <Box
        p={'4px'}
        w={width / 4}
        h={width / 4}
        rounded={12}
        bgColor={colors.BORDER}>
        <Center>
          <Image style={styles.image} source={props.image} alt="logo" />
        </Center>
      </Box>
      <VStack flex={1} justifyContent={'space-evenly'}>
        <HStack alignItems={'center'}>
          <Text flex="1" fontSize={18} fontWeight={600} numberOfLines={1}>
            {props.name}
          </Text>
        </HStack>
        <HStack alignItems={'center'} space={8}>
          <Box
            bgColor={props.colorCode}
            borderWidth={1}
            borderColor={
              props.colorCode.includes('#fff') ? '#2e2e2e' : 'transparent'
            }
            w={'12px'}
            h={'12px'}
            rounded="full"
          />
          <Text color={colors.BODY} fontSize={12}>
            {props.color}
          </Text>
          <Box h={'60%'} w={1} bgColor={colors.BODY} />
          <Text color={colors.BODY} fontSize={12}>
            {' '}
            Size = {props.size}
          </Text>
        </HStack>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={16} fontWeight={600} flex={1} numberOfLines={1}>
            $ {props.countNum * props.price}
          </Text>
          <Box
            justifyContent={'center'}
            w={'32px'}
            h={'32px'}
            backgroundColor={colors.BORDER}
            rounded={'full'}
            alignItems={'center'}>
            <Text fontSize={12} fontWeight={'bold'}>
              {props.countNum.toString()}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ItemCheckout;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
});
