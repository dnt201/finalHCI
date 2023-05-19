import React, {useEffect, useState} from 'react';
import {EyeOff, EyeOn, Lock, OrderConfirm, SecurityOn} from '@icons';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {IRootStackParamList} from '@navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  Checkbox,
  HStack,
  Input,
  Modal,
  Spinner,
  Text,
  VStack,
  View,
} from 'native-base';
import {Keyboard, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '@common/styles';

type iForgotPassWord__CreateNewPassProps = NativeStackScreenProps<
  IRootStackParamList,
  'ForgotPassWord__CreateNewPass'
>;
const ForgotPassWord__CreateNewPass: React.FC<
  iForgotPassWord__CreateNewPassProps
> = props => {
  const {navigation} = props;
  const [canSee, setCanSee] = useState(false);
  const [canMove, setCanMove] = useState(false);
  const [passWord, setPassWord] = useState<string>('');
  const [confirmPassWord, setConfirmPassWord] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (passWord.length > 0 && passWord === confirmPassWord) setCanMove(true);
    else setCanMove(false);
  }, [passWord, confirmPassWord]);
  return (
    <HeaderBackLayout
      goBack={() => navigation.navigate('Login')}
      title="Tạo mật khẩu mới">
      <Modal
        closeOnOverlayClick={false}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        display={'flex'}
        alignItems="center">
        <VStack bg={colors.WHITE} w={'80%'} py={4} px={'10%'} borderRadius={20}>
          <SecurityOn />
          <Text textAlign="center" fontSize={20} fontWeight={'500'} py={4}>
            Congratulation!
          </Text>
          <Text textAlign="center" mb={4}>
            Tài khoản của bạn sẵn sàng để sử dụng. You will redirected to the
            Login Page, please login with new password
          </Text>

          <Spinner accessibilityLabel="Loading posts" />
        </VStack>
      </Modal>
      <VStack flex={1} alignItems="center" space={20}>
        {isKeyboardVisible ? null : <OrderConfirm />}
        <HStack>
          <Text
            textAlign="left"
            flex={1}
            w={'100%'}
            fontSize="14"
            numberOfLines={1}>
            Tạo mật khẩu mới cho tài khoản của bạn.
          </Text>

          <TouchableOpacity onPress={() => setCanSee(pre => !pre)}>
            {canSee ? <EyeOn /> : <EyeOff />}
          </TouchableOpacity>
        </HStack>
        <View style={styles.loginPhone__container__inputContainer}>
          <Lock />
          <Input
            variant={'unstyled'}
            style={
              styles.loginPhone__container__loginPhone__container__inputContainer__input
            }
            value={passWord}
            onChangeText={e => setPassWord(e)}
            placeholder="Nhập mật khẩu của bạn..."
            type={canSee ? 'text' : 'password'}
          />
        </View>
        <View style={styles.loginPhone__container__inputContainer}>
          <Lock />
          <Input
            variant={'unstyled'}
            style={
              styles.loginPhone__container__loginPhone__container__inputContainer__input
            }
            value={confirmPassWord}
            onChangeText={e => setConfirmPassWord(e)}
            placeholder="Xác nhận mật khẩu của bạn..."
            type={canSee ? 'text' : 'password'}
          />
        </View>
        <View style={styles.loginPhone__container__rememberContainer}>
          <Checkbox value="one" isChecked={isChecked} size={'lg'}>
            <Text onPress={() => setIsChecked(pre => !pre)}>
              Ghi nhớ mật khẩu
            </Text>
          </Checkbox>
        </View>
      </VStack>

      <Button
        rounded={16}
        disabled={!canMove}
        variant={canMove ? 'primary' : 'primary_disable'}
        onPress={() => {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            navigation.navigate('LoginWithEmail');
          }, 3000);
        }}>
        Thay đổi mật khẩu
      </Button>
    </HeaderBackLayout>
  );
};

export default ForgotPassWord__CreateNewPass;

const styles = StyleSheet.create({
  loginPhone__container__inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#dfdfdf',
    borderRadius: 8,
    paddingLeft: 8,
    overflow: 'hidden',
  },
  loginPhone__container__loginPhone__container__inputContainer__input: {
    paddingVertical: 8,
    flex: 1,
    height: 52,
    color: '#212122',
    fontSize: 16,
    paddingRight: 16,
    paddingHorizontal: 4,
  },
  loginPhone__container__rememberContainer: {
    display: 'flex',
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
