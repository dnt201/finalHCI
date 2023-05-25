import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {
  Box,
  Button,
  HStack,
  Input,
  Modal,
  ScrollView,
  Spinner,
  Text,
  View,
} from 'native-base';
import {ArrowBack, Magnify} from '@icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '@hooks/useRedux';
import {iProductItem, listOfListItem} from '@screens/Home/list';
import Oops from '@assets/images/oops.png';
import ListCategoryFiller from '@components/ListCategoryFiller';
import ProductItem from '@components/ProductItem';
interface iWishList
  extends NativeStackScreenProps<IRootStackParamList, 'WishList'> {}

const WishList: React.FC<iWishList> = ({navigation}) => {
  const {categorySelected} = useAppSelector(state => state.category);
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearch, setIsSearch] = useState<undefined | boolean>();
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [allItem, setAllItem] = useState(listOfListItem);
  const [listItemByCategorySelected, setAllItemByCategorySelected] = useState(
    listOfListItem[categorySelected],
  );
  useEffect(() => {
    if (isSearch === undefined) setIsSearch(false);
    else {
      setIsSearch(true);
      var i = setTimeout(() => {
        setIsSearch(false);
        if (categorySelected === -1) {
          if (searchValue !== undefined && searchValue.length > 0) {
            console.log(searchValue, categorySelected);

            const tempList: iProductItem[][] = [];
            allItem.map(list => {
              let a = list.filter(obj => {
                const normalizedStr = obj.name
                  .normalize('NFKD')
                  .replace(/[^\x00-\x7F]/g, '');
                return normalizedStr
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              tempList.push(a);
            });
            setAllItem(tempList);
          } else if (searchValue === '') {
            setAllItem(listOfListItem);
          }
        } else {
          if (searchValue !== undefined && searchValue.length > 0) {
            console.log(searchValue, categorySelected);

            const tempList = listOfListItem[categorySelected].filter(obj => {
              const normalizedStr = obj.name
                .normalize('NFKD')
                .replace(/[^\x00-\x7F]/g, '');
              return normalizedStr
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            });
            setAllItemByCategorySelected(tempList);
          } else if (searchValue === '') {
            setAllItemByCategorySelected(listOfListItem[categorySelected]);
          }
        }
      }, 750);
      return () => clearTimeout(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  useEffect(() => {
    if (categorySelected > -1)
      setAllItemByCategorySelected(allItem[categorySelected]);
    setSearchValue('');
  }, [categorySelected]);

  const [unLike, setUnLike] = useState('');
  const [confirmRemove, setConfirmRemove] = useState(false);
  useEffect(() => {
    if (unLike.length > 0) setConfirmRemove(true);
  }, [unLike]);
  const removeObjectByName = (array: iProductItem[][], name: string) => {
    return array.map(subArray => subArray.filter(obj => obj.name !== name));
  };
  const removeObjectByName1 = (array: iProductItem[], name: string) => {
    return array.filter(obj => obj.name !== name);
  };

  return (
    <SafeAreaView style={styles.headerBackLayout__container}>
      <Modal
        isOpen={confirmRemove}
        onClose={() => {
          setConfirmRemove(false);
          setUnLike('');
        }}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Bỏ thích sản phẩm!</Modal.Header>
          <Modal.Body>
            <Text>
              Bạn có muốn xóa sản phẩm {unLike} ra khỏi danh sách yêu thích?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setConfirmRemove(false);
                  setUnLike('');
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  let a = removeObjectByName(allItem, unLike);
                  setAllItem(a);
                  if (listItemByCategorySelected !== undefined) {
                    let b = removeObjectByName1(
                      listItemByCategorySelected,
                      unLike,
                    );
                    setAllItemByCategorySelected(b);
                  }
                  setUnLike('');
                  setConfirmRemove(false);
                }}>
                Yes
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <View style={styles.headerBackLayout__container__headerContainer}>
        <TouchableOpacity
          onPress={() =>
            openSearch === false ? navigation.goBack() : setOpenSearch(false)
          }>
          <ArrowBack height={20} />
        </TouchableOpacity>
        {openSearch === true ? (
          <Input
            isFocused={true}
            variant="unstyled"
            flex="1"
            py={3}
            borderWidth={1}
            borderRadius={8}
            value={searchValue}
            onChangeText={e => setSearchValue(e)}
            leftElement={
              <View ml={2}>
                <Magnify />
              </View>
            }
            rightElement={
              isSearch ? (
                <View mr={2}>
                  <Spinner />
                </View>
              ) : undefined
            }
          />
        ) : (
          <>
            <Text
              style={styles.headerBackLayout__container__headerContainer_title}>
              My Wishlist
            </Text>
            <TouchableOpacity onPress={() => setOpenSearch(true)}>
              <Box pr={2}>
                <Magnify />
              </Box>
            </TouchableOpacity>
          </>
        )}
      </View>
      <ListCategoryFiller />

      <ScrollView>
        {categorySelected === -1 ? (
          <HStack flexWrap={'wrap'} style={styles.rowGap24} pt={2}>
            {allItem.every(innerArray => innerArray.length === 0) ? (
              <HStack justifyContent="center" alignItems="center">
                <Image style={styles.imgOops} source={Oops} />
                <Text
                  w={220}
                  textAlign="center"
                  fontSize={16}
                  fontWeight={'600'}
                  numberOfLines={2}>
                  We have no item!{':(('}
                </Text>
              </HStack>
            ) : (
              allItem.map((_, index) =>
                allItem[index].map((item, i) => (
                  <ProductItem
                    unLike={setUnLike}
                    key={item.name + i}
                    {...item}
                    goDetail={() =>
                      navigation.navigate('Product__Detail', {item: item})
                    }
                  />
                )),
              )
            )}
          </HStack>
        ) : (
          <HStack flexWrap={'wrap'} style={styles.rowGap24} pt={2}>
            {listItemByCategorySelected !== undefined &&
            listItemByCategorySelected.length > 0 ? (
              listItemByCategorySelected.map((item, i) => (
                <ProductItem
                  unLike={setUnLike}
                  key={item.name + i}
                  {...item}
                  goDetail={() =>
                    navigation.navigate('Product__Detail', {item: item})
                  }
                />
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
                  We have no item!{':(('}
                </Text>
              </HStack>
            )}
          </HStack>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishList;
const styles = StyleSheet.create({
  rowGap24: {
    rowGap: 24,
  },

  imgOops: {
    width: 120,
    height: 120,
  },
  headerBackLayout__container: {
    padding: 12,
    paddingTop: 32,
    display: 'flex',
  },
  headerBackLayout__container__headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 24,
  },
  headerBackLayout__container__headerContainer_icon: {},
  headerBackLayout__container__headerContainer_title: {
    fontSize: 20,
    flex: 1,
    fontWeight: '600',
    color: '#2e2e2e',
  },
  headerBackLayout__container__contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 16,
  },
});
