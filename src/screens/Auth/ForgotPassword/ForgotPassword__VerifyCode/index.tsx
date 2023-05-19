import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IRootStackParamList} from '@navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import OtpInput from '@components/OtpInput';
import {Button} from 'native-base';

type iForgotPassword__VerifyCodeProps = NativeStackScreenProps<
  IRootStackParamList,
  'ForgotPassword__VerifyCode'
>;

const ForgotPassword__VerifyCode: React.FC<
  iForgotPassword__VerifyCodeProps
> = props => {
  const {navigation, route} = props;
  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const [seconds, setSeconds] = useState(5);
  const [resend, setResend] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (seconds === 0) {
      setResend(true);
    }
  }, [seconds]);

  return (
    <HeaderBackLayout title="Quên mật khẩu" goBack={() => navigation.goBack()}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <Text numberOfLines={1} style={styles.message}>
          Code đã được gửi đến{' '}
          <Text style={styles.contactMessage}>{route.params.curData}</Text>
        </Text>
        <OtpInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
        {resend ? (
          <TouchableOpacity
            onPress={() => {
              setResend(false);
              setSeconds(60);
              setOTPCode('');
            }}>
            <Text style={styles.textResendBtn}>Resend</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.textResend}>Gửi lại code trong {seconds} </Text>
        )}
        {/* <OtpInputs
        autofillFromClipboard={true}
        handleChange={() => console.log()}
        numberOfInputs={6}
      /> */}
      </Pressable>
      <Button
        disabled={!isPinReady}
        onPress={e => {
          e.preventDefault();
          e.stopPropagation();
          navigation.navigate('ForgotPassWord__CreateNewPass');
        }}
        variant={isPinReady ? 'primary' : 'primary_disable'}>
        Xác thực
      </Button>
    </HeaderBackLayout>
  );
};

export default ForgotPassword__VerifyCode;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    marginBottom: '20%',
  },
  message: {
    textAlign: 'center',
    fontSize: 13,
  },
  contactMessage: {
    fontWeight: '600',
  },
  textResend: {
    fontSize: 13,
    textAlign: 'center',
  },
  textResendBtn: {
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
