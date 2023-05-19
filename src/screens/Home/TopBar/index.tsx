import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {HStack, Image, Text, VStack} from 'native-base';
import {Hearth, Notify} from '@icons';

const TopBar = () => {
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
      <TouchableOpacity style={styles.p2}>
        <Notify />
      </TouchableOpacity>
      <TouchableOpacity style={styles.p2}>
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
