import { ScrollView, StyleSheet, View } from 'react-native';
import VotingCard from '../../components/VotingScreen/VotingCard';
import { useEffect } from 'react';

function VotingScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <VotingCard title='Upcoming Meeting' date='March 24th 2024' />

        <VotingCard title='Deadline extension' date='May 17th 2024' />
      </View>
    </ScrollView>
  );
}

export default VotingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    gap: 20,
  },
});
