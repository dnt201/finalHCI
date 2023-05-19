import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {ArrowBack} from '@icons';
import {SafeAreaView} from 'react-native-safe-area-context';

interface iHeaderBackLayoutProps extends PropsWithChildren {
  title: string;
  goBack: () => void;
}
const HeaderBackLayout: React.FC<iHeaderBackLayoutProps> = props => {
  const {title, goBack, children} = props;
  return (
    <SafeAreaView style={styles.headerBackLayout__container}>
      <View style={styles.headerBackLayout__container__headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowBack height={20} />
        </TouchableOpacity>
        <Text style={styles.headerBackLayout__container__headerContainer_title}>
          {title || 'No title'}
        </Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default HeaderBackLayout;

const styles = StyleSheet.create({
  headerBackLayout__container: {
    padding: 12,
    paddingTop: 32,
    display: 'flex',
    height: '100%',
  },
  headerBackLayout__container__headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 24,
  },
  headerBackLayout__container__headerContainer_icon: {},
  headerBackLayout__container__headerContainer_title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2e2e2e',
  },
  headerBackLayout__container__contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 16,
  },
});
