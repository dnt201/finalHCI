import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {More} from '@icons';
import {VStack, Text, View, HStack, Box, Center, ScrollView} from 'native-base';
import {listItemCart} from '@screens/Cart/listItemCart';
import {colors, width} from '@common/styles';
import ItemTrackOrder from './Item';
import OrderStatus from './OrderStatus';
import OrderStatusDetail from './OrderStatusDetail';

interface iTrackOrder
  extends NativeStackScreenProps<IRootStackParamList, 'TrackOrder'> {}

const TrackOrder: React.FC<iTrackOrder> = ({navigation, route}) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <HeaderBackLayout
      title={'Track Order'}
      goBack={() => navigation.goBack()}
      leftElement={<More />}>
      <ScrollView>
        <VStack>
          {seeMore === false ? (
            <ItemTrackOrder key={listItemCart[0].name} item={listItemCart[0]} />
          ) : (
            <VStack space={'12px'}>
              {listItemCart.map(item => (
                <ItemTrackOrder key={item.name} item={item} />
              ))}
            </VStack>
          )}

          <TouchableOpacity
            style={styles.touch}
            onPress={() =>
              seeMore === false ? setSeeMore(true) : setSeeMore(false)
            }>
            <Box flex={1} h={'1px'} />
            <Text fontSize={14} fontWeight={600} px={2}>
              {seeMore === false ? '-- More --' : '-- Less --'}
            </Text>
            <Box flex={1} h={'1px'} />
          </TouchableOpacity>
          <OrderStatus step={route.params.step} />
          <OrderStatusDetail step={route.params.step} />
        </VStack>
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  image: {
    width: width / 4 - 8,
    height: width / 4 - 8,
  },
  touch: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 4,
    alignItems: 'center',
  },
});
