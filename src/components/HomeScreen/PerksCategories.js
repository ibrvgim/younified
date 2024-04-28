import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { useSelector } from 'react-redux';

function PerksCategories({ category, handlePress }) {
  const selectedCategory = useSelector((state) => state.perks.category);
  const active = selectedCategory === category;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        active && styles.active,
        pressed && styles.pressed,
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.text, active && styles.active]}>{category}</Text>
    </Pressable>
  );
}

export default PerksCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white300,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 50,
  },

  text: {
    color: '#333',
    fontWeight: '600',
  },

  pressed: {
    opacity: 0.5,
  },

  active: {
    backgroundColor: colors.blue300,
    color: '#fff',
  },
});
