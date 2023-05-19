import React from 'react';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {EvaluateSolid, RecommendSolid, X, HighLightSolid} from '@icons';
import {Box, Radio, Text} from 'native-base';

interface IFilterScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'ProductFilter'> {}
{
}

const ProductFilterScreen: React.FC<IFilterScreenProps> = ({navigation}) => {
  return (
    <ScreenWithBackLayout
      noInsidePaddingX
      LeftIcon={<X />}
      title="Lọc sản phẩm theo"
      handleGoBack={() => navigation.goBack()}>
      <Radio.Group defaultValue="1" name="">
        <Box
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDir="row"
          p="2"
          px="4"
          borderColor="line"
          borderBottomWidth="1"
          mb="2">
          <Box flexDir="row" alignItems="center">
            <RecommendSolid />
            <Text color="black" fontSize="16" ml="5" textAlign="right">
              Được đề xuất
            </Text>
          </Box>
          <Radio
            value="1"
            my="2"
            size="lg"
            justifyContent="space-between"
            w="100%"
          />
        </Box>

        <Box
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDir="row"
          p="2"
          px="4"
          borderColor="line"
          borderBottomWidth="1"
          mb="2">
          <Box flexDir="row" alignItems="center">
            <HighLightSolid />
            <Text color="black" fontSize="16" ml="5" textAlign="right">
              Nổi bật
            </Text>
          </Box>
          <Radio
            value="2"
            my="2"
            size="lg"
            justifyContent="space-between"
            w="100%"
          />
        </Box>
        <Box
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDir="row"
          p="2"
          px="4"
          borderColor="line"
          borderBottomWidth="1"
          mb="2">
          <Box flexDir="row" alignItems="center">
            <EvaluateSolid />
            <Text color="black" fontSize="16" ml="5" textAlign="right">
              Đánh giá
            </Text>
          </Box>
          <Radio
            value="3"
            my="2"
            size="lg"
            justifyContent="space-between"
            w="100%"
          />
        </Box>
      </Radio.Group>
    </ScreenWithBackLayout>
  );
};

export default ProductFilterScreen;
