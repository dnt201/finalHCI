import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {Email, Location, Phone} from '@icons';
import {Box, Button, ChevronDownIcon, ScrollView, Text} from 'native-base';
import {colors} from '@common/styles';

interface iProFile__EditProfile
  extends NativeStackScreenProps<IRootStackParamList, 'EditProfile'> {
  email: string;
  fulName: string;
  address: string;
  gender: string;
  phoneNumber: string;
}
const Profile__Index: React.FC<iProFile__EditProfile> = props => {
  const {navigation, email, fulName, address, gender, phoneNumber} = props;
  return (
    <HeaderBackLayout title="Edit Profile" goBack={() => navigation.goBack()}>
      <ScrollView style={styles.profile__editProfile__InformationContainer}>
        <Box style={styles.profile__editProfile__ItemContainer}>
          <Text
            numberOfLines={1}
            style={styles.profile__editProfile__ItemTitle}>
            {fulName ? fulName : 'Duy Nhã Trần'}
          </Text>
        </Box>
        <Box style={styles.profile__editProfile__ItemContainer}>
          <Text
            numberOfLines={1}
            style={styles.profile__editProfile__ItemTitle}>
            {email ? email : 'duynhatran201@gmail.com'}
          </Text>
          <Email />
        </Box>

        <Box style={styles.profile__editProfile__ItemContainer}>
          <Text
            numberOfLines={1}
            style={styles.profile__editProfile__ItemTitle}>
            {gender ? gender : 'Nam'}
          </Text>
          <ChevronDownIcon size={18} />
        </Box>

        <Box style={styles.profile__editProfile__ItemContainer}>
          <Text
            numberOfLines={1}
            style={styles.profile__editProfile__ItemTitle}>
            {phoneNumber ? phoneNumber : '0368689201'}
          </Text>
          <Phone />
        </Box>
        <Box style={styles.profile__editProfile__ItemContainer}>
          <Text
            numberOfLines={1}
            style={styles.profile__editProfile__ItemTitle}>
            {address ? address : 'Have no value'}
          </Text>
          <Location />
        </Box>
      </ScrollView>
      <View style={styles.profile__editProfile__ListButtonContainer}>
        <Button
          variant={'outline'}
          onPress={() => navigation.navigate('EditProfile__Update')}
          style={styles.profile__editProfile__ButtonItem}>
          <Text>Update</Text>
        </Button>
        <Button
          variant={'primary'}
          style={styles.profile__editProfile__ButtonItem}>
          Change password
        </Button>
      </View>
    </HeaderBackLayout>
  );
};

export default Profile__Index;

const styles = StyleSheet.create({
  profile__editProfile__InformationContainer: {
    display: 'flex',
  },
  profile__editProfile__ItemContainer: {
    padding: 14,
    backgroundColor: colors.BORDER,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profile__editProfile__ItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  profile__editProfile__InputContainer: {
    padding: 16,
  },

  profile__editProfile__ListButtonContainer: {
    display: 'flex',
    gap: 4,
    flexDirection: 'row',
  },
  profile__editProfile__ButtonItem: {
    flex: 1,
    borderRadius: 14,
  },
});
