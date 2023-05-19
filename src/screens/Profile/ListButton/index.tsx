import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, ScrollView, Text} from 'native-base';
import {ChevronRight} from '@icons';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IBottomParamList, IRootStackParamList} from 'src/navigator';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Profile, Location, Notify, Wallet, LogOut, HelpInfo} from '@icons';
import {colors} from '@common/styles';
import {useAppDispatch} from '@hooks/useRedux';
import {setUser} from '@redux/slices/auth';

export type iNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<IBottomParamList, 'Profile'>,
  NativeStackNavigationProp<IRootStackParamList, 'EditProfile'>
>;

interface iListButtonProps {}
const ListButton: React.FC<iListButtonProps> = () => {
  const navigation = useNavigation<iNavigationProps>();
  const dispatch = useAppDispatch();
  return (
    <ScrollView style={styles.listButton__container}>
      {/* {listButton.map((btn, i) => ( */}
      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => navigation.navigate('EditProfile')}>
        <Box my={2}>
          <Profile />
        </Box>
        <Text style={{flex: 1}} color={'#000'}>
          Edit profile
        </Text>
        <Box>{<ChevronRight />}</Box>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => navigation.navigate('Location')}>
        <Box my={2}>
          <Location />
        </Box>
        <Text style={{flex: 1}} color={'#000'}>
          Location
        </Text>
        <Box>{<ChevronRight />}</Box>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => navigation.navigate('NotifyList')}>
        <Box my={2}>
          <Notify />
        </Box>
        <Text style={{flex: 1}} color={'#000'}>
          Notify
        </Text>
        <Box>{<ChevronRight />}</Box>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => navigation.navigate('Payment')}>
        <Box my={2}>
          <Wallet />
        </Box>
        <Text style={{flex: 1}} color={'#000'}>
          Payment
        </Text>
        <Box>{<ChevronRight />}</Box>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => navigation.navigate('EditProfile')}>
        <Box my={2}>
          <HelpInfo />
        </Box>
        <Text style={{flex: 1}} color={'#000'}>
          Help Center
        </Text>
        <Box>{<ChevronRight />}</Box>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listButton__container__btnContainer}
        onPress={() => dispatch(setUser(null))}>
        <Box my={2}>
          <LogOut fill={colors.ERROR} />
        </Box>
        <Text style={{flex: 1}} color={'error'}>
          Log out
        </Text>
      </TouchableOpacity>
      {/* ))} */}
    </ScrollView>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  listButton__container: {
    width: '100%',
  },
  listButton__container__btnContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingLeft: 4,
    gap: 8,
  },
});
