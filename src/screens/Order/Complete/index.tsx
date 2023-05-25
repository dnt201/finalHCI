import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Center, HStack, Text, VStack, View} from 'native-base';
import {listItemCart2} from '@screens/Cart/listItemCart';
import {colors, width} from '@common/styles';
interface iComplete {
  nav: () => void;
}
const Complete: React.FC<iComplete> = props => {
  return (
    <VStack space={'12px'}>
      {listItemCart2.map(item => (
        <TouchableOpacity onPress={() => props.nav()} key={item.name}>
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
                <TouchableOpacity
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    borderRadius: 16,
                    backgroundColor: '#000',
                  }}>
                  <Text fontSize={12} fontWeight={500} color={'#fff'}>
                    Buy Again
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </HStack>
        </TouchableOpacity>
      ))}
    </VStack>
  );
};

export default Complete;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
});
