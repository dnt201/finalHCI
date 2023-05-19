import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '@common/styles';

interface OtpInputProps {
  code: string;
  setCode: (s: string) => void;
  maximumLength: number;
  setIsPinReady: (b: boolean) => void;
}
const OtpInput: React.FC<OtpInputProps> = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}) => {
  const inputRef = useRef<TextInput>(null);
  const boxArray = new Array(maximumLength).fill(0);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };
  useEffect(() => {
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <View style={styles.OTPInputContainer}>
      <TouchableOpacity
        style={styles.SplitOTPBoxesContainer}
        onPress={handleOnPress}>
        {boxArray.map((_, index) => {
          const emptyInput = '';
          const digit = code[index] || emptyInput;

          const isCurrentValue = index === code.length;
          const isLastValue = index === maximumLength - 1;
          const isCodeComplete = code.length === maximumLength;
          const isValueFocused =
            isCurrentValue || (isLastValue && isCodeComplete);

          return (
            <View
              style={
                isInputBoxFocused && isValueFocused
                  ? styles.SplitBoxesFocused
                  : styles.SplitBoxes
              }
              key={index}>
              <Text>{digit}</Text>
            </View>
          );
        })}
      </TouchableOpacity>

      <TextInput
        style={styles.TextInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        onPressIn={() => setIsInputBoxFocused(true)}
      />
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  OTPInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputHidden: {
    position: 'absolute',
    opacity: 0,
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
  SplitOTPBoxesContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SplitBoxes: {
    borderColor: colors.BORDER,
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    width: 60,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
  },
  SplitBoxesFocused: {
    display: 'flex',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    padding: 12,
    borderColor: '#000',
    width: 60,
    height: 45,
    borderWidth: 1,
  },

  SplitBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#e5e5e5',
  },
});
