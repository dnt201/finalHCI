import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Pressable} from 'native-base';
import React from 'react';
import {colors, typos, responsive} from '@common/styles';
import {Apple, Facebook, Google, Welcome} from '@icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';
import CustomDivider from '@components/CustomDivider';

interface ILoginScreenProps
  extends NativeStackScreenProps<IRootStackParamList, 'Login'> {}

const LoginScreen: React.FC<ILoginScreenProps> = navigation => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Welcome />
      </View>
      <Text style={styles.logoTitle}>Let's you in</Text>

      {/*Login with phone number*/}

      {/*Login with google*/}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert('Tính năng đang được cập nhập!')}>
          <Google />
          <Text variant="sm_regular" flex={1} textAlign="center" color="black">
            Đăng nhập với Google
          </Text>
        </TouchableOpacity>

        {/*Login with facebook/*/}
        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('Tính năng đang được cập nhập!')}>
          <Facebook />
          <Text variant="sm_regular" flex={1} textAlign="center" color="black">
            Đăng nhập với Facebook
          </Text>
        </Pressable>

        {/*Login with apple id*/}
        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('Tính năng đang được cập nhập!')}>
          <Apple />
          <Text variant="sm_regular" flex={1} textAlign="center" color="black">
            Đăng nhập với Apple ID
          </Text>
        </Pressable>

        <CustomDivider s="or" />

        <Pressable
          style={styles.btnLazy}
          color="primary.100"
          onPress={() => navigation.navigation.navigate('LoginWithEmail')}>
          <Text
            fontWeight="500"
            flex={1}
            textAlign="center"
            color="#fff"
            fontSize={14}>
            Đăng nhập với mật khẩu
          </Text>
        </Pressable>
      </View>

      <View style={styles.bottomText}>
        <Text variant="sm_regular">Bạn chưa có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigation.navigate('Register');
          }}>
          <Text color="primary.100" variant="sm_regular" fontWeight="bold">
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  logoContainer: {
    marginVertical: 28,
    alignSelf: 'center',
  },
  logoTitle: {
    height: 60,
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingHorizontal: responsive(16),
  },
  btn: {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.LINE,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  btnLazy: {
    display: 'flex',
    backgroundColor: colors.PRIMARY,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.LINE,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 32,
    fontWeight: '600',
    paddingHorizontal: 8,
  },
  btnText: {
    ...typos.xs.medium,
    fontWeight: '500',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },

  bottomText: {
    position: 'absolute',
    bottom: responsive(20),
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
