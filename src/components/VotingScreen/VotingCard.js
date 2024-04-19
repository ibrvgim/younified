import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { shadow } from '../../constants/shadow';
import { colors } from '../../constants/colors';

function VotingCard({ title, date }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>

      <Text style={styles.date}>Ends in 14 days | {date}</Text>
      <Button>Vote</Button>
    </View>
  );
}

export default VotingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 12,

    ...shadow,
  },

  heading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  date: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
    color: colors.black50,
  },
});
