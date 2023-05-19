import React, {useState} from 'react';
import {FlatList, ScrollView} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import ProductCard from '@components/ProductCardV2';
import FilterButton from './component/FilterButton';
import {ArrowDown} from '@icons';

interface ICategoryListProps
  extends NativeStackScreenProps<IRootStackParamList, 'ProductList'> {}

const ProductList: React.FC<ICategoryListProps> = ({navigation, route}) => {
  const data = [1, 2, 3, 4, 5, 6];
  const [isPromo, setIsPromo] = useState<boolean>(false);
  const [isOpenCurrently, setIsOpenCurrently] = useState<boolean>(false);
  const [isPartner, setIsPartNer] = useState<boolean>(false);

  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title={route.params.title}>
      <ScrollView horizontal={true} width="100%">
        <FilterButton
          leftIcon={<ArrowDown />}
          onPress={() => navigation.navigate('ProductFilter')}>
          Sắp xếp
        </FilterButton>
        <FilterButton
          leftIcon={<ArrowDown />}
          onPress={() => navigation.navigate('ProductFilter')}>
          Danh mục
        </FilterButton>

        <FilterButton onPress={() => setIsPromo(!isPromo)} isPressed={isPromo}>
          Khuyến mãi
        </FilterButton>
        <FilterButton
          onPress={() => setIsOpenCurrently(!isOpenCurrently)}
          isPressed={isOpenCurrently}>
          Đang mở cửa
        </FilterButton>
        <FilterButton
          onPress={() => setIsPartNer(!isPartner)}
          isPressed={isPartner}>
          Đối tác
        </FilterButton>
      </ScrollView>
      <FlatList
        mt="10"
        _contentContainerStyle={{pb: '5'}}
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <ProductCard
            key={item.toString()}
            imageWidth="150"
            onPress={() => {}}
          />
        )}
      />
    </ScreenWithBackLayout>
  );
};

export default ProductList;
