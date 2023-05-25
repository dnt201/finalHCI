import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {More} from '@icons';
import {VStack, Text, View, HStack, Box, Center} from 'native-base';
import {iItemCart, listItemCart} from '@screens/Cart/listItemCart';
import {colors, width} from '@common/styles';

const ItemTrackOrder: React.FC<{item: iItemCart}> = props => {
  const {item} = props;
  return (
    <HStack
      key={item.name}
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
          <Image style={styles.image} source={item.image} alt="logo" />
        </Center>
      </Box>
      <VStack flex={1} justifyContent={'space-evenly'}>
        <HStack alignItems={'center'}>
          <Text flex="1" fontSize={18} fontWeight={600} numberOfLines={1}>
            {item.name}
          </Text>
        </HStack>
        <HStack alignItems={'center'} space={8}>
          <Box
            bgColor={item.colorCode}
            borderWidth={1}
            borderColor={
              item.colorCode.includes('#fff') ? '#2e2e2e' : 'transparent'
            }
            w={'12px'}
            h={'12px'}
            rounded="full"
          />
          <Text color={colors.BODY} fontSize={12}>
            {item.color}
          </Text>
          <Box h={'60%'} w={1} bgColor={colors.BODY} />
          <Text color={colors.BODY} fontSize={12}>
            {' '}
            Size = {item.size}
          </Text>
          <Box h={'60%'} w={1} bgColor={colors.BODY} />
          <Text color={colors.BODY} fontSize={12}>
            {' '}
            Qty = {item.countNum}
          </Text>
        </HStack>

        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={16} fontWeight={600} flex={1} numberOfLines={1}>
            $ {item.countNum * item.price}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ItemTrackOrder;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
});
