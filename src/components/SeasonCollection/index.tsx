import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {iCollectionItem} from '@screens/Home/collection';
import {width} from '@common/styles';
import {Box, HStack, Text, VStack} from 'native-base';

interface iSeasonCollection {
  collectionItem: iCollectionItem;
}
const SeasonCollection: React.FC<iSeasonCollection> = props => {
  const {collectionItem} = props;
  return (
    <HStack
      w={width - 36}
      p={'16px'}
      py={'6px'}
      mx={'6px'}
      bgColor={`#${collectionItem.colorCode}`}
      rounded={20}>
      <VStack width={'50%'} justifyContent={'center'} space={4}>
        <Box>
          <Text fontSize={24} flex={1} color={'#fff'} fontWeight={'600'}>
            {collectionItem.name}
          </Text>
        </Box>
        <Box>
          <Text fontSize={16} flex={1} color={'#fff'} fontWeight={'600'}>
            Today's Special
          </Text>
        </Box>
        <Box>
          <Text fontSize={10} numberOfLines={2} flex={1} color={'#fff'}>
            {collectionItem.subTitle}
          </Text>
        </Box>
      </VStack>
      <Image style={styles.imageCollection} source={collectionItem.image} />
    </HStack>
  );
};

export default SeasonCollection;

const styles = StyleSheet.create({
  imageCollection: {
    width: '50%',
    height: width / 3,
  },
});
