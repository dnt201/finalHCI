import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {Box, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import PinInput from './PinInput';

interface iStep2Props {
  setStep: (step: number) => void;
}
const Step2: React.FC<iStep2Props> = props => {
  const {setStep} = props;

  // const [pinNumber, setPinNumber] = useState('');
  // const [isPinReady, setIsPinReady] = useState(false);
  // const maximumPinLength = 4;

  // const navigate = useNavigation();
  return (
    <HeaderBackLayout title="Create New PIN" goBack={() => setStep(1)}>
      <Text style={styles.createPin__title}>
        Thêm PIN giúp tăng cường bảo mật cho tài khoản của bạn!
      </Text>
      <PinInput
      // pin={pinNumber}
      // setPin={setPinNumber}
      // maximumLength={maximumPinLength}
      // setIsPinReady={setIsPinReady}
      />
      <Box flex="1" />
      <Button
        marginBottom={8}
        variant={'primaryRadius'}
        onPress={() => setStep(3)}>
        Continue
      </Button>
    </HeaderBackLayout>
  );
};

export default Step2;

const styles = StyleSheet.create({
  createPin__title: {
    textAlign: 'center',
    marginTop: 62,
    marginBottom: 62,
    fontSize: 14,
    fontWeight: '300',
    paddingHorizontal: 8,
  },
  btn__avatar: {
    position: 'relative',
    marginTop: 16,
  },
  btn__avatar__editIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    bottom: 0,
    right: 8,
    zIndex: 2,
    backgroundColor: '#000',
    borderRadius: 2,
  },
  listInputContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    flex: 1,
  },
  listInputContainer__input: {
    height: 40,
    backgroundColor: '#fdfdfd',
  },
  listInputContainer__inputDob: {
    height: 40,
    backgroundColor: '#fdfdfd',
    textAlign: 'left',
    paddingLeft: 12,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  lazyCss: {
    position: 'absolute',
    zIndex: 4,
    left: 8,
  },
});
