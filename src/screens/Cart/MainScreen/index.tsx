import React from 'react';
import {IBottomParamList} from '@navigator';
import {Heading} from 'native-base';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

interface INavigationProps
  extends BottomTabNavigationProp<IBottomParamList, 'Home'> {}

interface IDetailScreenProps {
  navigation: INavigationProps;
}

const MainScreen: React.FC<IDetailScreenProps> = ({navigation}) => {
  return (
    <Layout title="Giỏ hàng của bạn" handleGoBack={() => navigation.goBack()}>
      <Heading>Cart Screen</Heading>
    </Layout>
  );
};

export default MainScreen;
