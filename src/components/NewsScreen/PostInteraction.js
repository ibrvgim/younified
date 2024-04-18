import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

function PostInteraction({ likes, comments }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <AntDesign name='hearto' size={22} color={colors.black100} />
        <Text style={styles.itemText}>{likes}</Text>
      </View>

      <View style={styles.itemBox}>
        <FontAwesome name='comment-o' size={22} color={colors.black100} />
        <Text style={styles.itemText}>{comments}</Text>
      </View>
    </View>
  );
}

export default PostInteraction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
  },

  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  itemText: {
    fontWeight: '500',
    color: colors.black100,
  },
});
