import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const OVERALL_STARS = 5;

function StarsRating({ rating }) {
  const noStars = OVERALL_STARS - rating;
  let stars = OVERALL_STARS - noStars;

  if (rating >= 6) stars = 5;

  return (
    <View style={styles.starsContainer}>
      {stars > 0 &&
        Array.from({ length: stars }).map((_, index) => (
          <AntDesign key={index} name='star' size={18} color={colors.yellow} />
        ))}

      {noStars > 0 &&
        Array.from({ length: noStars }).map((_, index) => (
          <AntDesign
            key={index}
            name='star'
            size={18}
            color={colors.white400}
          />
        ))}
    </View>
  );
}

export default StarsRating;

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 20,
  },
});
