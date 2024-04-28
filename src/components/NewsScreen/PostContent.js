import { Image, StyleSheet, Text, View } from 'react-native';

function PostContent({ text, image, collapsed }) {
  const showText =
    collapsed && text.length > 100 ? `${text.slice(0, 100)}...` : text;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{showText}</Text>

      {!collapsed && (
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      )}
    </View>
  );
}

export default PostContent;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  text: {
    lineHeight: 20,
  },

  image: {
    height: 200,
    width: '100%',
    borderRadius: 7,
  },
});
