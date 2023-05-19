import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Button, Image} from 'native-base';
import {Edit} from '@icons';

const TopSection = () => {
  return (
    <View style={styles.topSection__container}>
      <Button variant={'noStyle'} style={styles.topSection__container__avatar}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP-2SfTRWTgugcXPPE2g_Ecs8eaLi0ysMDfuGDDc&s',
          }}
          alt="image ava"
          size="lg"
          rounded="full"
        />
        <Box style={styles.topSection__container__avatar__editIcon}>
          <Edit fill={'#fff'} stroke={'#fff'} width={16} height={16} />
        </Box>
      </Button>
      <Text style={styles.topSection__container__name}>Duy Nhã Trần</Text>
      <Text style={styles.topSection__container__phone}>+84 0368689201</Text>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  topSection__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  topSection__container__avatar: {
    position: 'relative',
  },
  topSection__container__avatar__editIcon: {
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
  topSection__container__name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 4,
  },
  topSection__container__phone: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 4,
  },
});
