import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

function PostHeader({ fullName, postTime, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image style={styles.image} source={image} />

        <View>
          <Text style={styles.userName}>{fullName}</Text>
          <Text style={styles.postDate}>posted {postTime}</Text>
        </View>
      </View>

      <View style={styles.postInteraction}>
        <AntDesign name='pushpino' size={20} color={colors.black50} />

        <AntDesign name='up' size={20} color={colors.black50} />
      </View>
    </View>
  );
}

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  postInteraction: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  userName: {
    fontSize: 16,
    fontWeight: '600',
  },

  postDate: {
    fontWeight: '300',
    color: colors.black50,
    fontSize: 12,
    marginTop: 1,
  },
});
