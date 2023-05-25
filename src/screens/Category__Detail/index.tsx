import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IRootStackParamList } from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import { listOfListItem } from '@screens/Home/list';
import ProductItem from '@components/ProductItem';
import { HStack, VStack } from 'native-base';
import HaveNoItem from '@components/HaveNoItem';
interface iCategory__Detail
  extends NativeStackScreenProps<IRootStackParamList, 'Category__Detail'> { }


const Category__Detail: React.FC<iCategory__Detail> = (props) => {
  const { navigation, route } = props;
  const { categoryName, id } = route.params;
  // const { params } = route;
  // const { category } = params;
  return (
    <HeaderBackLayout setIsSearch={() => { }} title={route.params.categoryName} goBack={() => navigation.goBack()}>
      <ScrollView>
        {listOfListItem[id] !== undefined && listOfListItem[id].length > 0 ?
          <HStack flexWrap={'wrap'}>
            {
              listOfListItem[id].map((item) =>
                <ProductItem key={item.name} goDetail={() => navigation.navigate('Product__Detail', { item })} {...item} />)}</HStack >
          : <HaveNoItem />
        }
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default Category__Detail;
