import React, {useState} from 'react';
import {Square, Text, VStack, HStack, Box} from 'native-base';
import {colors} from '@common/styles';
import {width} from '@hooks/dimensions';
import {HaftStar, Hearth} from '@icons';
import {iProductItem} from '@screens/Home/list';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
const ProductItem: React.FC<iProductItem> = props => {
  const {name, image, price, rating, sold} = props;
  const w = width / 2 - 24 > 200 ? 200 : width / 2 - 24;
  const [isLike, setIsLike] = useState(false);
  return (
    <VStack w={'50%'} space={4} position="relative">
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={e => {
          setIsLike(pre => !pre);
          e.preventDefault();
        }}>
        <Box borderRadius={50} p={'8px'} bgColor={'#2e2e2e'}>
          <Hearth
            width={18}
            height={18}
            fill={isLike ? '#D30000' : '#2e2e2e'}
            stroke={isLike ? '#d30000' : '#fff'}
          />
        </Box>
      </TouchableOpacity>
      <Square
        bg={colors.BORDER}
        size={w}
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded={16}>
        <Image source={image} style={styles.image} alt="" />
      </Square>
      <Text numberOfLines={1} mr={4} fontSize={18} mt={1} fontWeight={'500'}>
        {name}
      </Text>
      <HStack justifyContent={'flex-start'} alignItems={'center'} space={6}>
        <Box
          w={'24px'}
          h={'24px'}
          display={'flex'}
          flexDirection="row"
          alignItems="center"
          justifyContent={'center'}>
          <HaftStar />
        </Box>
        <Text>{rating}</Text>
        <Text fontSize={16}>|</Text>
        <Box bg={colors.BORDER} px={2} py={1} rounded={8}>
          <Text fontSize={11}>{sold} sold</Text>
        </Box>
      </HStack>
      <Text fontSize={18} mt={1} fontWeight={'500'}>
        $ {price.toFixed(2)}
      </Text>
    </VStack>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  likeBtn: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 20,
  },
});
