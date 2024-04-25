import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

function ScreenPending() {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size='large' color={colors.blue300} />
    </View>
  );
}

export default ScreenPending;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
