import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Logo, Email, Lock, Google, Facebook, Apple} from '@icons';
import {colors, height, responsive} from '@common/styles';
import {Button, Checkbox, Input} from 'native-base';
import {Text} from 'native-base';
//formik

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IBottomParamList, IRootStackParamList} from 'src/navigator';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//redux
import {useAppDispatch} from '@hooks/useRedux';
import {setUser} from '@redux/slices/auth';
import CustomDivider from '@components/CustomDivider';

type INavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<IRootStackParamList, 'LoginWithEmail'>,
  BottomTabNavigationProp<IBottomParamList, 'Home'>
>;

interface iLoginWithEmailProps {
  navigation: INavigationProps;
}

const LoginWithEmail: React.FC<iLoginWithEmailProps> = ({navigation}) => {
  //redux
  const dispatch = useAppDispatch();

  return (
    <View style={styles.loginPhone__container}>
      <View style={styles.loginPhone__container__logo}>
        <Logo />
      </View>
      <Text style={styles.loginPhone__container__title}>
        Đăng nhập vào tài khoản của bạn
      </Text>
      <View style={styles.loginPhone__container__inputContainer}>
        <Email />
        <Input
          variant={'unstyled'}
          style={
            styles.loginPhone__container__loginPhone__container__inputContainer__input
          }
          placeholder="Nhập gmail của bạn..."
        />
      </View>
      <View style={styles.loginPhone__container__inputContainer}>
        <Lock />
        <Input
          variant={'unstyled'}
          style={
            styles.loginPhone__container__loginPhone__container__inputContainer__input
          }
          placeholder="Nhập mật khẩu của bạn..."
          type="password"
        />
      </View>

      <View style={styles.loginPhone__container__rememberContainer}>
        <Checkbox
          value="one"
          size={'lg'}
          padding={1}
          accessibilityLabel="Airplane mode."
        />
        <Text>Ghi nhớ</Text>
      </View>

      <Button variant="primary" mt="5" onPress={() => dispatch(setUser('Hi'))}>
        Đăng nhập
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text textAlign={'center'} style={styles.forgotPassWord__btn}>
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>
      <CustomDivider s="or continue with" />
      <View style={styles.loginPhone_container_anotherMethodContainer}>
        <Button variant={'loginAnotherMethod'}>
          <Google />
        </Button>
        <Button variant={'loginAnotherMethod'}>
          <Facebook />
        </Button>
        <Button variant={'loginAnotherMethod'}>
          <Apple />
        </Button>
      </View>
      <View style={styles.bottomText}>
        <Text variant="sm_regular">Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color="primary.100" variant="sm_regular" fontWeight="bold">
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  loginPhone__container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsive(16),
    marginTop: responsive(24),
    height: height,
    gap: 8,
  },
  loginPhone__container__logo: {
    alignSelf: 'center',
  },
  loginPhone__container__title: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  forgotPassWord__btn: {fontWeight: '500', marginTop: 4},
  loginPhone__container__inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#dfdfdf',
    borderRadius: 8,
    paddingLeft: 8,
  },
  loginPhone__container__loginPhone__container__inputContainer__input: {
    width: '100%',
    flex: 1,
    paddingVertical: 8,
    height: 52,
    fontSize: 16,
    paddingRight: 16,
    paddingHorizontal: 4,
  },

  loginPhone__container__rememberContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  btnLogin: {
    height: responsive(40),
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: responsive(10),
  },
  loginPhone_container_anotherMethodContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 8,
    marginBottom: 8,
  },
  bottomText: {
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
