import {StyleSheet} from 'react-native';
import React from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {Box, Button, Input, Select, View} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from '@navigator';
import {Email, Location, Phone} from '@icons';
import {colors} from '@common/styles';
interface iProfile__Update
  extends NativeStackScreenProps<IRootStackParamList, 'EditProfile__Update'> {
  email: string;
  fulName: string;
  address: string;
  gender: string;
  phoneNumber: string;
}
const Profile__Update: React.FC<iProfile__Update> = props => {
  const {navigation, email, fulName, address, gender, phoneNumber} = props;
  return (
    <HeaderBackLayout title="Edit Profile" goBack={() => navigation.goBack()}>
      <View style={styles.profile__Update__Container}>
        <Box style={styles.profile__Update__InputContainer}>
          <Input
            variant={'unstyled'}
            style={styles.profile__Update__Input}
            value={fulName || undefined}
            placeholder="Enter your full name"
          />
        </Box>
        <Box style={styles.profile__Update__InputContainer}>
          <Input
            variant={'unstyled'}
            style={styles.profile__Update__Input}
            value={email || undefined}
            placeholder="Enter your email"
            rightElement={
              <Box pr={1}>
                <Email />
              </Box>
            }
          />
        </Box>
        <View style={styles.profile__Update__InputContainer}>
          <Select
            variant="unstyled"
            style={styles.profile__Update__Input}
            defaultValue={gender || '1'}>
            <Select.Item label="Nam" value="1" />
            <Select.Item label="Nữ" value="2" />
          </Select>
        </View>
        <Box style={styles.profile__Update__InputContainer}>
          <Input
            variant={'unstyled'}
            style={styles.profile__Update__Input}
            value={phoneNumber || undefined}
            placeholder="Enter your phone number"
            rightElement={
              <Box pr={1}>
                <Phone />
              </Box>
            }
          />
        </Box>
        <Box style={styles.profile__Update__InputContainer}>
          <Input
            variant={'unstyled'}
            style={styles.profile__Update__Input}
            value={address || undefined}
            placeholder="Enter your location"
            rightElement={
              <Box pr={1}>
                <Location />
              </Box>
            }
          />
        </Box>
      </View>
      <View>
        <Button
          rounded={20}
          py={4}
          disabled
          variant={1 ? 'primary_disable' : 'primary'}>
          Save change
        </Button>
      </View>
    </HeaderBackLayout>
  );
};

export default Profile__Update;

const styles = StyleSheet.create({
  profile__Update__Container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: 16,
    minHeight: 500,
  },
  profile__Update__InputContainer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.BORDER,
    display: 'flex',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  profile__Update__Input: {
    padding: 4,
    fontSize: 14,
    fontWeight: '500',
  },
});
