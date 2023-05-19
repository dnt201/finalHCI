import React, {useState} from 'react';
import {HStack, ScrollView, Text, VStack} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';

//navigation
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IBottomParamList, IRootStackParamList} from 'src/navigator';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//components

//redux
// import {useAppSelector} from '@hooks/useRedux';
import TopBar from './TopBar';
import ButtonFind from './ButtonFind';
import ProductItem from '@components/ProductItem';
import CategoryItem from '@components/CategoryItem';
import {listCategory8, listOfListItem} from './list';
import {More} from '@icons';
import TitleAndMore from './TitleAndMore';
import ListCategoryFiller from '@components/ListCategoryFiller';
import {useAppSelector} from '@hooks/useRedux';
import Oops from '@assets/images/oops.png';
import {listCategory} from './list';
import {listCollection} from './collection';
import SeasonCollection from '@components/SeasonCollection';

export type INavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Home'>,
  NativeStackNavigationProp<
    IRootStackParamList,
    'Category__More',
    'Category__Detail'
  >
>;

interface IHomeScreenMode {
  navigation: INavigationProps;
}

const HomeScreen: React.FC<IHomeScreenMode> = ({navigation}) => {
  // const {type} = useAppSelector(state => state.home);

  // const navigateToProductList = (id, title) =>
  //   navigation.navigate('ProductList', {id, title});

  // const navigateToProductDetail = id => {
  //   navigation.navigate('Store', id);
  // };
  const [isMore, setIsMore] = useState(false);
  const {categorySelected} = useAppSelector(state => state.category);
  console.log(categorySelected);

  return (
    <ScrollView style={styles.homeContainer}>
      <VStack space={'16px'} pb={12}>
        <TopBar />
        <ButtonFind />
        <TitleAndMore
          title="Season Collection"
          onClick={() => navigation.navigate('Product__MostPopular')}
        />

        <FlatList
          data={listCollection}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.flatListCollection}
          renderItem={item => <SeasonCollection collectionItem={item.item} />}
        />
        <HStack flexWrap="wrap" style={styles.rowGap24}>
          {isMore === false ? (
            <>
              {listCategory8.map(category => (
                <CategoryItem
                  onClickGo={() =>
                    navigation.navigate('Category__Detail', {category})
                  }
                  key={category.id}
                  category={category}
                />
              ))}
              <CategoryItem
                onClickGo={() => setIsMore(true)}
                category={{id: -1, name: 'Thêm', icon: More}}
              />
            </>
          ) : (
            <>
              {listCategory.map(category => (
                <CategoryItem
                  onClickGo={() =>
                    navigation.navigate('Category__Detail', {category})
                  }
                  key={category.id}
                  category={category}
                />
              ))}
              <CategoryItem
                onClickGo={() => setIsMore(false)}
                category={{id: -1, name: 'Ẩn', icon: More}}
              />
            </>
          )}
        </HStack>
        {/* list product */}
        <TitleAndMore
          title="Most Popular"
          onClick={() => navigation.navigate('Product__MostPopular')}
        />

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
            {listOfListItem[categorySelected] !== undefined ? (
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
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    columnGap: 12,
    rowGap: 12,
    padding: 12,
    paddingBottom: 0,
  },
  rowGap24: {
    rowGap: 24,
  },
  imgOops: {
    width: 120,
    height: 120,
  },
  flatListCollection: {},
});
