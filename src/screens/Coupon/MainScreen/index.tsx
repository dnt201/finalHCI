import React, {useState} from 'react';
import {FlatList, HStack} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';

//components
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import CouponCard from '@components/CouponCard';
import CouponButton from '@components/CouponButton';

interface IMainScreenProp
  extends NativeStackScreenProps<IRootStackParamList, 'CouponList'> {}

type ICouponType = 'Personal' | 'Common';

const CouponList: React.FC<IMainScreenProp> = ({navigation, route}) => {
  const data = new Array(6).fill(1);
  const [couponType, setCouponType] = useState<ICouponType>('Personal');

  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title="Danh sách mã khuyến mãi">
      <HStack width="90%" mx="auto" justifyContent="space-between">
        <CouponButton
          isPressed={couponType === 'Personal'}
          onPress={() => setCouponType('Personal')}>
          Mã cá nhân
        </CouponButton>
        <CouponButton
          isPressed={couponType === 'Common'}
          onPress={() => setCouponType('Common')}>
          Deal hot khuyến mãi
        </CouponButton>
      </HStack>
      {couponType === 'Personal' ? (
        <FlatList
          mt="5"
          _contentContainerStyle={{pb: '5'}}
          data={data}
          renderItem={({item}) => (
            <CouponCard
              width="100%"
              onNavigateCouponDetail={() =>
                navigation.navigate('CouponDetail', item)
              }
              onNavigateProductList={
                route.params.isFromHome === true
                  ? () =>
                      navigation.navigate('ProductList', {
                        id: '1',
                        title: 'Danh sách sản phẩm áp dụng',
                      })
                  : () => {
                      navigation.goBack();
                    }
              }
            />
          )}
        />
      ) : (
        <FlatList
          mt="5"
          _contentContainerStyle={{pb: '5'}}
          data={data}
          renderItem={({item}) => (
            <CouponCard
              width="100%"
              onNavigateCouponDetail={() =>
                navigation.navigate('CouponDetail', item)
              }
              onNavigateProductList={() =>
                navigation.navigate('ProductList', {
                  id: '1',
                  title: 'Danh sách sản phẩm áp dụng',
                })
              }
            />
          )}
        />
      )}
    </ScreenWithBackLayout>
  );
};

export default CouponList;
