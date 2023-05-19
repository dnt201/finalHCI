import React, {useState} from 'react';
import {Box, Button, Text, View} from 'native-base';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {EmailFill, ForgotPasswordDraw, Phone} from '@icons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '@common/styles';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from 'src/navigator';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type iForgotPasswordProps = BottomTabNavigationProp<
  IRootStackParamList,
  'ForgotPassword'
>;

const ForgotPassword = () => {
  const navigate = useNavigation<iForgotPasswordProps>();

  const [curSelect, setCurSelect] = useState(1);
  const [curData, setCurData] = useState('03******01');
  return (
    <HeaderBackLayout title="Quên mật khẩu" goBack={() => navigate.goBack()}>
      <View style={styles.forgotPassword__container}>
        <ForgotPasswordDraw />
        <Text style={styles.forgotPassword__text}>
          Chọn chi tiết phương thức liên hệ nào chúng tôi sẽ sử dụng để đặt lại
          mật khẩu của bạn!
        </Text>
        <TouchableOpacity
          onPress={() => {
            setCurSelect(1);
            setCurData('03******01');
          }}
          disabled={curSelect === 1}
          style={
            curSelect === 1
              ? styles.forgotPassword__itemBtn__selected
              : styles.forgotPassword__itemBtn
          }>
          <Box style={styles.forgotPassword__itemBtn__left}>
            <Phone />
          </Box>
          <Box style={styles.forgotPassword__itemBtn__right}>
            <Text color={'body.100'} fontSize={11} fontWeight={'200'}>
              via SMS:
            </Text>
            <Text>03******01</Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={curSelect === 2}
          onPress={() => {
            setCurSelect(2);
            setCurData('d**********201@gmail.vng.com.vn');
          }}
          style={
            curSelect === 2
              ? styles.forgotPassword__itemBtn__selected
              : styles.forgotPassword__itemBtn
          }>
          <Box style={styles.forgotPassword__itemBtn__left}>
            <EmailFill />
          </Box>
          <View style={styles.forgotPassword__itemBtn__right}>
            <Text color={'body.100'} fontSize={11} fontWeight={'200'}>
              via Email:
            </Text>
            <Text numberOfLines={1}>d**********201@gmail.vng.com.vn</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Button
        rounded={24}
        variant={'primary'}
        position={'relative'}
        bottom={0}
        onPress={() => {
          navigate.navigate('ForgotPassword__VerifyCode', {curData: curData});
          // nav.navigation.navigate('ForgotPassword__VerifyCode', {curData});
        }}>
        Continued
      </Button>
    </HeaderBackLayout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  forgotPassword__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  forgotPassword__text: {
    fontWeight: '300',
    fontSize: 14,
  },
  forgotPassword__itemBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    borderColor: colors.BORDER,
    borderWidth: 1,
    width: '80%',
    gap: 8,
  },
  forgotPassword__itemBtn__selected: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    borderWidth: 1,
    width: '80%',
    gap: 8,
    borderColor: '#000',
  },
  forgotPassword__itemBtn__left: {
    padding: 16,
    backgroundColor: colors.BORDER,
    borderRadius: 100,
  },
  forgotPassword__itemBtn__right: {
    flex: 1,
  },
});
