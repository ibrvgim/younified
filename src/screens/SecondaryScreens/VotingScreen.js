import { ScrollView, StyleSheet, Text, View } from 'react-native';

function VotingScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text>Here is voting screen!</Text>
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
