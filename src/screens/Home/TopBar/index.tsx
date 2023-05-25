import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {HStack, Image, Text, VStack} from 'native-base';
import {Hearth, Notify} from '@icons';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IBottomParamList, IRootStackParamList } from '@navigator';
import { INavigationProps } from '..';



interface iTopBarProps {
  navigation: INavigationProps;
}
const TopBar: React.FC<iTopBarProps> = (props) => {
  const { navigation } = props
  return (
    <HStack alignItems="center" space={8}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP-2SfTRWTgugcXPPE2g_Ecs8eaLi0ysMDfuGDDc&s',
        }}
        alt="image ava"
        w={12}
        h={12}
        rounded="full"
      />
      <VStack flex={1}>
        <Text fontSize={14} fontWeight={'300'}>
          Xin chào 👋 👋{' '}
        </Text>
        <Text fontSize={18} fontWeight={'500'}>
          {'Duy Nhã Trần'}
        </Text>
      </VStack>
      <TouchableOpacity style={styles.p2} onPress={() => navigation.navigate('Notify')}> 
        <Notify />
      </TouchableOpacity>
      <TouchableOpacity style={styles.p2} onPress={() => navigation.navigate('WishList')}>
        <Hearth />
      </TouchableOpacity>
    </HStack>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  p2: {
    padding: 2,
  },
});
