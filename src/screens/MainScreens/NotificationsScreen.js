import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import NotificationCard from '../../components/NotificationsScreen/NotificationCard';
import { useEffect } from 'react';
import { colors } from '../../constants/colors';

function NotificationsScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ReadAllNotifications />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <NotificationCard id='001' read={true} />
        <NotificationCard id='002' read={true} />
        <NotificationCard id='003' read={true} />
        <NotificationCard id='004' />
        <NotificationCard id='005' />
      </View>
    </ScrollView>
  );
}

export default NotificationsScreen;

function ReadAllNotifications() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.buttonText}>Read All</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 15,
  },

  //ReadAllNotifications

  buttonContainer: {
    paddingHorizontal: 22,
  },

  buttonText: {
    color: colors.blue300,
    fontWeight: '600',
    fontSize: 15,
  },

  pressed: {
    opacity: 0.5,
  },
});
