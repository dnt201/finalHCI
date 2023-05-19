import {Text} from 'react-native';
import React from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {IRootStackParamList} from '@navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface iProduct__MostPopular
  extends NativeStackScreenProps<IRootStackParamList, 'Product__MostPopular'> {}

const Product__MostPopular: React.FC<iProduct__MostPopular> = ({
  navigation,
}) => {
  return (
    <HeaderBackLayout title={'Most Popular'} goBack={() => navigation.goBack()}>
      <Text>Product__MostPopular</Text>
    </HeaderBackLayout>
  );
};

export default Product__MostPopular;
