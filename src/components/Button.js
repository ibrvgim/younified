import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

function Button({ children, handlePress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue300,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 5,
  },

  text: {
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '600',
    fontSize: 13,
  },

  pressed: {
    opacity: 0.75,
  },
});