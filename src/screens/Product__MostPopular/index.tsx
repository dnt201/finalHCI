import {StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {IRootStackParamList} from '@navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from '@hooks/useRedux';
import ListCategoryFiller from '@components/ListCategoryFiller';
import {HStack, Text} from 'native-base';
import {listOfListItem} from '@screens/Home/list';
import ProductItem from '@components/ProductItem';
import Oops from '@assets/images/oops.png';

interface iProduct__MostPopular
  extends NativeStackScreenProps<IRootStackParamList, 'Product__MostPopular'> {}

const Product__MostPopular: React.FC<iProduct__MostPopular> = ({
  navigation,
}) => {
  const {categorySelected} = useAppSelector(state => state.category);
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  return isSearch ? (
    <HeaderBackLayout></HeaderBackLayout>
  ) : (
    <HeaderBackLayout
      setIsSearch={setIsSearch}
      title={'Most Popular'}
      goBack={() => navigation.goBack()}>
      <ScrollView>
        <ListCategoryFiller />
        {categorySelected === -1 ? (
          <HStack flexWrap={'wrap'} style={styles.rowGap24} pt={2}>
            {listOfListItem.map((_, index) =>
              listOfListItem[index].map((item, i) => (
                <ProductItem key={item.name + i} {...item} />
              )),
            )}
          </HStack>
        ) : (
          <HStack flexWrap={'wrap'} style={styles.rowGap24} pt={2}>
            {listOfListItem[categorySelected] !== undefined &&
            listOfListItem[categorySelected].length > 0 ? (
              listOfListItem[categorySelected].map(item => (
                <ProductItem key={item.name} {...item} />
              ))
            ) : (
              <HStack justifyContent="center" alignItems="center">
                <Image style={styles.imgOops} source={Oops} />
                <Text
                  w={220}
                  textAlign="center"
                  fontSize={16}
                  fontWeight={'600'}
                  numberOfLines={2}>
                  We have no item for this category {':(('}
                </Text>
              </HStack>
            )}
          </HStack>
        )}
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default Product__MostPopular;
const styles = StyleSheet.create({
  rowGap24: {
    rowGap: 24,
  },
  imgOops: {
    width: 120,
    height: 120,
  },
});
