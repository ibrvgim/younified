import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import StarsRating from '../StarsRating';
import { shadow } from '../../constants/shadow';

function PerksItem({ item }) {
  const { image, title, description, price, duration, rating } = item;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.card}>
        <View style={styles.information}>
          <Image style={styles.image} source={image} />

          <View style={styles.description}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{description}</Text>

            <StarsRating rating={rating} />
          </View>
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.duration}>/ {duration}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PerksItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,

    ...shadow,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },

  information: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  image: {
    height: 100,
    width: 110,
    borderRadius: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 1,
  },

  subTitle: {
    fontSize: 12,
    color: colors.black50,
    letterSpacing: 0.3,
  },

  priceBox: {
    marginRight: 10,
    alignItems: 'flex-end',
  },

  price: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 1,
  },

  duration: {
    fontWeight: '600',
    color: colors.black50,
  },

  pressed: {
    opacity: 0.6,
  },
});
