import {ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {listCategory} from '@screens/Home/list';
import {Box, Text} from 'native-base';
import {useAppDispatch} from '@hooks/useRedux';
import {setCategorySelect} from '@redux/slices/category';

const ListCategoryFiller = () => {
  const [curSelect, setCurSelect] = useState(-1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCategorySelect(-1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          setCurSelect(-1);
          dispatch(setCategorySelect(-1));
        }}>
        <Box
          bgColor={curSelect === -1 ? '#2e2e2e' : 'transparent'}
          px={4}
          py={'6px'}
          rounded={16}
          borderWidth={1}
          mx={1}
          borderColor={'#2e2e2e'}>
          <Text
            fontWeight={'500'}
            color={curSelect === -1 ? '#fff' : '#2e2e2e'}>
            All
          </Text>
        </Box>
      </TouchableOpacity>
      {listCategory.map(category => (
        <TouchableOpacity
          key={category.id}
          onPress={() => {
            setCurSelect(category.id);
            dispatch(setCategorySelect(category.id));
          }}>
          <Box
            bgColor={curSelect === category.id ? '#2e2e2e' : 'transparent'}
            px={4}
            py={'6px'}
            rounded={16}
            borderWidth={1}
            mx={1}
            borderColor={'#2e2e2e'}>
            <Text
              fontWeight={'500'}
              color={curSelect === category.id ? '#fff' : '#2e2e2e'}>
              {category.name}
            </Text>
          </Box>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListCategoryFiller;
const styles = StyleSheet.create({
  scrollView: {},
});
