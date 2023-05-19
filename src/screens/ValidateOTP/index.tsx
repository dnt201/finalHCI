import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Box} from 'native-base';
import {colors} from '@common/styles';
import ScreenWithBackLayout from '@layouts/ScreenWithBackLayout';
import OTP from '@components/OTP';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IRootStackParamList} from 'src/navigator';

interface IValidateOTPProps
  extends NativeStackScreenProps<IRootStackParamList, 'ValidateOTP'> {}

const ValidateOTP: React.FC<IValidateOTPProps> = ({navigation}) => {
  const [otpCode, setOTPCode] = useState('');
  const maximumCodeLength = 6;
  return (
    <Box flex={1} style={{backgroundColor: colors.WHITE}}>
      <ScreenWithBackLayout
        handleGoBack={() => {
          navigation.goBack();
        }}
        title="Xác minh tài khoản"
        background>
        <OTP
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
        />
      </ScreenWithBackLayout>
    </Box>
  );
};

export default ValidateOTP;

const styles = StyleSheet.create({});
