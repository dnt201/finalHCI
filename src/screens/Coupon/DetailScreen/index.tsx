import React from 'react';
import {Box, Button, Center, ScrollView, Text, VStack} from 'native-base';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {Welcome3} from '@icons';

interface IDetailScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'CouponDetail'> {}

const DetailScreen: React.FC<IDetailScreenProps> = ({navigation, route}) => {
  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title="Chi tiết khuyến mãi">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center
          justifyContent="center"
          width="100%"
          borderColor="line"
          borderWidth="1"
          p="2"
          rounded="xl">
          <Welcome3 width="90%" />
        </Center>
        <Center mt="5">
          <Button
            variant="rounded"
            isPressed
            _pressed={{opcaity: 0.6}}
            w="40%"
            maxW="60%">
            GOGOBEI721#9
          </Button>
          <Text fontSize="16" color="secondary.100" fontWeight="700" my="2">
            GIẢM 50K | SCB
          </Text>
          <Box flexDir="row" alignItems="center" w="40%" maxW="60%">
            <Text fontSize="13" color="body.100" mr="2">
              Sử dụng đến:
            </Text>
            <Text fontSize="14" color="secondary.100">
              31.8.2022
            </Text>
          </Box>
        </Center>

        <VStack
          space="5"
          mt="5"
          width="100%"
          justifyContent="center"
          alignItems="center">
          <Text fontSize="14" color="body.100" mb="2">
            - Coupon áp dụng cho các ngày từ thứ Hai đến thứ Sáu hàng tuần; tối
            đa 1500 lượt sử dụng trong suố chương trình khuyến mãi
          </Text>
          <Text fontSize="14" color="body.100" mb="2">
            - Coupon áp dụng cho các ngày từ thứ Hai đến thứ Sáu hàng tuần; tối
            đa 1500 lượt sử dụng trong suố chương trình khuyến mãi
          </Text>
          <Text fontSize="14" color="body.100" mb="2">
            - Coupon áp dụng cho các ngày từ thứ Hai đến thứ Sáu hàng tuần; tối
            đa 1500 lượt sử dụng trong suố chương trình khuyến mãi
          </Text>
          <Text fontSize="14" color="body.100" mb="2">
            - Coupon áp dụng cho các ngày từ thứ Hai đến thứ Sáu hàng tuần; tối
            đa 1500 lượt sử dụng trong suố chương trình khuyến mãi
          </Text>
        </VStack>
      </ScrollView>
    </ScreenWithBackLayout>
  );
};

export default DetailScreen;
