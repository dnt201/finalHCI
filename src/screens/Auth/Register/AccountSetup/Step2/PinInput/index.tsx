import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface iPinInputProps {}
const PinInput = () => {
  return (
    <View style={styles.pinInputContainer}>
      <TextInput style={styles.textInputHidden} keyboardType="numeric" />
    </View>
  );
};

export default PinInput;

const styles = StyleSheet.create({
  pinInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 64,
  },
  textInputHidden: {
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
});
