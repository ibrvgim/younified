import { Image, StyleSheet, Text, View } from 'react-native';

function PostContent({ text, image }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>

      <Image style={styles.image} source={image} />
    </View>
  );
}

export default PostContent;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  image: {
    height: 200,
    width: '100%',
    borderRadius: 7,
  },
});
