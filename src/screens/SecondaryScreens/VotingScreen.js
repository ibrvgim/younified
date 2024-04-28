import { ScrollView, StyleSheet, View } from 'react-native';
import VotingCard from '../../components/VotingScreen/VotingCard';
import { voteQuestions } from '../../data/voteQuestions';

function VotingScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        {voteQuestions.map((item) => (
          <VotingCard
            title={item.title}
            startDate={item.startDate}
            key={item.id}
          />
        ))}
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
