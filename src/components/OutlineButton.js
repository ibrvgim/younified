import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

function OutlineButton({ children, handlePress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.blue300,
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
  },

  text: {
    color: colors.blue300,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
    fontSize: 13,
  },

  pressed: {
    backgroundColor: colors.white200,
  },
});
