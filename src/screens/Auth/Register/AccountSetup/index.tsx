import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const AccountSetup = () => {
  const [step, setStep] = useState(1);
  return (
    <View style={styles.accountSetup__container}>
      {step === 1 ? (
        <Step1 setStep={setStep} />
      ) : step === 2 ? (
        <Step2 setStep={setStep} />
      ) : step === 3 ? (
        <Step3 setStep={setStep} />
      ) : null}
    </View>
  );
};

export default AccountSetup;

const styles = StyleSheet.create({
  accountSetup__container: {},
});
