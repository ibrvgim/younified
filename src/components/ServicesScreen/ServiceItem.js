import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

function ServiceItem({ title, description, children, handlePress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}
    >
      <View>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View>{children}</View>
    </Pressable>
  );
}

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white200,
    paddingHorizontal: 25,
    borderRadius: 20,
    minWidth: '90%',
    minHeight: 130,

    elevation: 4,
    shadowColor: colors.black100,
    shadowOpacity: 0.25,
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 7,
  },

  heading: {
    color: colors.black200,
    fontSize: 26,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },

  description: {
    fontSize: 15,
    color: colors.black50,
  },

  pressed: {
    opacity: 0.7,
  },
});
