import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {More} from '@icons';
import TopSection from './TopSection';
import {Box} from 'native-base';
import ListButton from './ListButton';
import logo from '@assets/images/logo.png';
const ProfileScreen = () => {
  return (
    <View style={styles.profileScreen__container}>
      <View style={styles.profileScreen__header}>
        <Image source={logo} style={styles.profileScreen__header__image} />
        <Text style={styles.profileScreen__header__title}>Profile</Text>
        <More />
      </View>
      <TopSection />
      <Box width={'100%'} height={1} bgColor={'#fafafa'} my={4} />
      <ListButton />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreen__container: {
    paddingHorizontal: 8,
    paddingTop: 8,
    minHeight: '100%',
  },
  profileScreen__header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  profileScreen__header__title: {
    fontSize: 24,
    fontWeight: '600',
    flex: 1,
  },
  profileScreen__header__image: {
    width: 24,
    height: 24,
  },
});
