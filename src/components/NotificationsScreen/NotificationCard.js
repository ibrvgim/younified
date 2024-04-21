import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

function NotificationCard({ read = false }) {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive((active) => !active);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.subContainer,
          active && styles.activeNotification,
          pressed && styles.pressed,
        ]}
        onPress={handleActive}
      >
        {read && (
          <View style={styles.unreadNotification}>
            <Text></Text>
          </View>
        )}

        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>
            Your personal information was updated
          </Text>
          <Text style={styles.notificationTime}>2024-04-19 09:38</Text>
        </View>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.deleteContainer,
          styles.activeDelete,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons name='trash' size={24} color='#fff' />
      </Pressable>
    </View>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    borderRadius: 15,
    ...shadow,
  },

  subContainer: {
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  deleteContainer: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.red,
    borderRadius: 15,
  },

  unreadNotification: {
    height: '100%',
    width: '2%',
    backgroundColor: colors.blue200,
  },

  notificationBox: {
    paddingVertical: 20,
    paddingLeft: 20,
    gap: 5,
  },

  notificationText: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: colors.black200,
  },

  notificationTime: {
    color: '#999',
    fontWeight: '300',
  },

  pressed: {
    opacity: 0.75,
  },

  activeNotification: {
    marginLeft: -65,
  },
});
