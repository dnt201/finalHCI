import {colors, width} from '@common/styles';
import {iCategoryItem} from '@screens/Home/list';
import {Box, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
interface iCategoryItemProps {
  category: iCategoryItem;
  onClickGo: () => void;
}
const CategoryItem: React.FC<iCategoryItemProps> = props => {
  const {category, onClickGo} = props;
  const {icon: Icon} = category;
  const w = width / 4 - 24 > 200 ? 200 : width / 4 - 24;

  return (
    <TouchableOpacity onPress={onClickGo}>
      <VStack alignItems={'center'} space={4}>
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          bgColor={colors.BORDER}
          rounded={50}
          mx={2}
          w={w}
          h={w}>
          <Icon />
        </Box>
        <Text numberOfLines={1} fontSize={16} fontWeight={'500'}>
          {category.name}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
};

export default CategoryItem;
