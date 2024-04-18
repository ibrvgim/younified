import { StyleSheet, View } from 'react-native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostInteraction from './PostInteraction';

function PostItem() {
  return (
    <View style={styles.container}>
      <PostHeader
        fullName='Alex Hoffmann'
        postTime='2 hours ago'
        image={require('../../../assets/images/user_avatar.jpg')}
      />

      <PostContent
        text='Lorem ipsum dolor sit amet, consectetuz adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        image={require('../../../assets/images/post_image.jpg')}
      />

      <PostInteraction likes={7} comments={4} />
    </View>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    gap: 15,
  },
});
