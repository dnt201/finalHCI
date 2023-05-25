import { StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView, VStack } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IRootStackParamList } from '@navigator';
import HeaderBackLayout from '@layouts/HeaderBackLayout';
import { listCollection } from '@screens/Home/collection';
import SeasonCollection from '@components/SeasonCollection';

interface iCollection__All
  extends NativeStackScreenProps<IRootStackParamList, 'Collection__All'> { }

const Collection__All: React.FC<iCollection__All> = ({ navigation }) => {
  return (
    <HeaderBackLayout title="All collection" goBack={() => navigation.goBack()}>
      <ScrollView style={styles.scrollView}>
        <VStack space={16}>
          {listCollection.map(collect => (
            <SeasonCollection collectionItem={collect} key={collect.name} />
          ))}
        </VStack>
      </ScrollView>
    </HeaderBackLayout>
  );
};

export default Collection__All;

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
  },
});
