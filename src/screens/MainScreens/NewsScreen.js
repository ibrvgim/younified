import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from '../../components/NewsScreen/PostItem';
import useGetNews from '../../hooks/news/useGetNews';
import ScreenPending from '../../components/ScreenPending';

function NewsScreen() {
  const { isPending, getAllNews } = useGetNews();

  if (isPending) return <ScreenPending />;

  return (
    <View style={styles.container}>
      <FlatList
        data={getAllNews}
        renderItem={({ item }) => <PostItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
});
