import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function HomeItem({ title, description, children, handlePress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}
    >
      <View style={styles.section}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.image}>{children}</View>
    </Pressable>
  );
}

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white200,
    marginHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,

    ...shadow,
  },

  section: {
    marginLeft: 20,
  },

  heading: {
    color: colors.black200,
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },

  description: {
    color: colors.black50,
  },

  image: {
    marginBottom: -10,
  },

  pressed: {
    opacity: 0.7,
  },
});
