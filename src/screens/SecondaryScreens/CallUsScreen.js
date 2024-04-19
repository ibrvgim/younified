import { ScrollView, StyleSheet, View } from 'react-native';
import CallUsCard from '../../components/CallUsScreen/CallUsCard';

function CallUsScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CallUsCard
          topic='Deadline Discussion'
          startDate='Jul 10, 2023'
          endDate='Jul 15, 2023'
          number='+49 179 846 18 956'
        />

        <CallUsCard
          topic='Weekly Meeting'
          startDate='Jul 19, 2023'
          endDate='Jul 19, 2023'
          number='+49 143 647 97 89'
        />

        <CallUsCard
          topic='Plan Discussion'
          startDate='Jul 21, 2023'
          endDate='Jul 23, 2023'
          number='+49 162 956 14 876'
        />
      </View>
    </ScrollView>
  );
}

export default CallUsScreen;

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
