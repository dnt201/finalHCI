import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import {Box, Button, Image, Input} from 'native-base';
import {Calendar, Edit, Email, VietnamFlag} from '@icons';
import DatePicker from 'react-native-date-picker';
import {colors} from '@common/styles';
import {useNavigation} from '@react-navigation/native';

interface iStep1Props {
  setStep: (step: number) => void;
}
const Step1: React.FC<iStep1Props> = props => {
  const {setStep} = props;
  const [dob, setDob] = useState<Date>(new Date());
  const [openDob, setOpenDob] = useState(false);
  const navigate = useNavigation();
  return (
    <HeaderBackLayout
      title="Fill Your Profile"
      goBack={() => navigate.goBack()}>
      <Button variant={'noStyle'} style={styles.btn__avatar}>
        <Image
          source={{
            uri: 'https://api-private.atlassian.com/users/18b314b77b8fe0151f3a3410a7a57714/avatar',
          }}
          alt="image ava"
          size="lg"
          rounded="full"
        />
        <Box style={styles.btn__avatar__editIcon}>
          <Edit fill={'#fff'} stroke={'#fff'} width={16} height={16} />
        </Box>
      </Button>
      <View style={styles.listInputContainer}>
        <Input
          style={styles.listInputContainer__input}
          variant={'unstyle'}
          placeholder="Full name"
        />
        <Input
          style={styles.listInputContainer__input}
          variant={'unstyle'}
          placeholder="Nick name"
        />

        <TouchableOpacity
          style={styles.listInputContainer__inputDob}
          onPress={() => setOpenDob(true)}>
          <Text style={{color: colors.SMOKE}}>{dob.toDateString()}</Text>
          <Calendar
            style={{position: 'absolute', right: 8}}
            fill={colors.SMOKE}
          />
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={openDob}
          date={dob}
          onConfirm={date => {
            setOpenDob(false);
            setDob(date);
          }}
          onCancel={() => {
            setOpenDob(false);
          }}
        />
        <Input
          style={styles.listInputContainer__input}
          variant={'unstyle'}
          placeholder="Email"
          rightElement={
            <Email
              fill={colors.SMOKE}
              style={{
                right: 8,
                position: 'absolute',
              }}
            />
          }
        />
        <View>
          <Input
            style={styles.listInputContainer__input}
            variant={'unstyle'}
            placeholder="Phone number"
            pl={10}
            leftElement={<VietnamFlag style={styles.lazyCss} />}
          />
        </View>
        <Input
          style={styles.listInputContainer__input}
          variant={'unstyle'}
          placeholder="Gender"
        />
      </View>
      <Button
        marginBottom={8}
        variant={'primaryRadius'}
        onPress={() => setStep(2)}>
        Continue
      </Button>
    </HeaderBackLayout>
  );
};

export default Step1;

const styles = StyleSheet.create({
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
