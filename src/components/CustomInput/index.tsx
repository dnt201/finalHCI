import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
interface CustomInput extends TextInput {
  icon?: React.ElementType<SVGElement>;
}
const CustomInput: React.FC<CustomInput> = props => {
  const {icon} = props;
  return (
    <Box style={styles.profile__editProfile__InputContainer}>
      <TextInput />
      {icon}
    </Box>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  profile__editProfile__InputContainer: {
    padding: 16,
  },
});
