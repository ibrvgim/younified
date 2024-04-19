import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function CallUsCard({ topic, startDate, endDate, number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{topic}</Text>

      <View style={styles.datesContainer}>
        <View>
          <Text style={styles.dateTextHeading}>Starts on:</Text>
          <Text style={styles.dateText}>{startDate}</Text>
        </View>

        <View>
          <Text style={styles.dateTextHeading}>Ends on:</Text>
          <Text style={styles.dateText}>{endDate}</Text>
        </View>
      </View>

      <Button styleText={styles.buttonText}>Call: {number}</Button>
    </View>
  );
}

export default CallUsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,

    ...shadow,
  },

  heading: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 40,
  },

  dateText: {
    fontWeight: '600',
  },

  dateTextHeading: {
    fontWeight: '500',
    color: colors.black50,
    marginBottom: 2,
  },

  buttonText: {
    textTransform: 'none',
  },
});
