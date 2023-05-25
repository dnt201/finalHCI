import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Center, HStack, Stack, Text, VStack, View} from 'native-base';
import {listItemCart} from '@screens/Cart/listItemCart';
import {colors, width} from '@common/styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';

interface iActive {
  nav: () => void;
}

const Active: React.FC<iActive> = props => {
  return (
    <VStack space={'12px'}>
      {listItemCart.map(item => (
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
            <HStack py={'2px'}>
              <View py={'2px'} px={'8px'} bgColor={colors.BORDER}>
                <Text fontSize={'10px'} fontWeight={600}>
                  In delivery
                </Text>
              </View>
            </HStack>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
              <Text fontSize={16} fontWeight={600} flex={1} numberOfLines={1}>
                $ {item.countNum * item.price}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.nav();
                }}
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 16,
                  backgroundColor: '#000',
                }}>
                <Text fontSize={12} fontWeight={500} color={'#fff'}>
                  Track Order
                </Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default Active;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
});
