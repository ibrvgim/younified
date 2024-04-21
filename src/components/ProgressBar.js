import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

function ProgressBar({ currentQuestion, questionsNumber }) {
  const percentage = (currentQuestion * 100) / questionsNumber;

  return (
    <View style={styles.bar}>
      <View style={[styles.progress, { width: `${percentage}%` }]}></View>
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    height: 15,
    borderColor: colors.white400,
    borderWidth: 0.4,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 3,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    backgroundColor: colors.green,
    borderRadius: 100,
  },
});
