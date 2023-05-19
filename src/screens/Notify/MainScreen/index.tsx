import React from 'react';
import {FlatList, Pressable} from 'native-base';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import NotifyCard from '@components/NotifyCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {DoubleCheck} from '@icons';
import {alertBar} from '@components/AlertBar';

interface IMainScreenProp
  extends NativeStackScreenProps<IRootStackParamList, 'NotifyList'> {}

const MainScreen: React.FC<IMainScreenProp> = ({navigation}) => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <ScreenWithBackLayout
      handleGoBack={() => navigation.goBack()}
      title="Thông báo của bạn"
      RightIcon={
        <Pressable
          p="2"
          _pressed={{bg: 'line', rounded: 'full'}}
          onPress={() =>
            alertBar({
              message: 'Đã đánh dấu là đã đọc',
            })
          }>
          <DoubleCheck />
        </Pressable>
      }>
      <FlatList
        mt="5"
        _contentContainerStyle={{pb: '5'}}
        data={data}
        renderItem={({item}) =>
          item > 2 ? (
            <NotifyCard
              isSeen
              onPress={() => navigation.navigate('NotifyDetail', {id: '1'})}
            />
          ) : (
            <NotifyCard
              onPress={() => navigation.navigate('NotifyDetail', {id: '1'})}
            />
          )
        }
      />
    </ScreenWithBackLayout>
  );
};

export default MainScreen;
