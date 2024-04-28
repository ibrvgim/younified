import { StyleSheet, View } from 'react-native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostInteraction from './PostInteraction';
import { useState } from 'react';
import { formatDistanceFromNow } from '../../utilities/helpers/calculateDate';

function PostItem({ item }) {
  const { user, news } = item;
  const [collapsed, setCollapsed] = useState(false);
  const time = formatDistanceFromNow(item.created_at);

  function handleCollapse() {
    setCollapsed((collapse) => !collapse);
  }

  return (
    <View style={styles.container}>
      <PostHeader
        fullName={`${user[0].firstName} ${user[0].lastName}`}
        postTime={time}
        image={require('../../../assets/images/user_avatar.jpg')}
        handleCollapse={handleCollapse}
        collapsed={collapsed}
      />

      <PostContent
        text={news[0].newsDescription}
        image={news[0].image}
        collapsed={collapsed}
      />

      <PostInteraction likes={news[0].likes} comments={news[0].comments} />
    </View>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    gap: 15,
    marginBottom: 15,
  },
});
