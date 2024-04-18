import { ScrollView, StyleSheet, View } from 'react-native';
import PostItem from '../../components/NewsScreen/PostItem';

function NewsScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <PostItem />
        <PostItem />
        <PostItem />
      </View>
    </ScrollView>
  );
}

export default NewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    gap: 10,
    paddingVertical: 20,
  },
});
