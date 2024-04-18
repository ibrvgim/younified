import { ScrollView, StyleSheet, View } from 'react-native';
import ContactsBox from '../../components/SettingsScreen/ContactsBox';
import NotificationsBox from '../../components/SettingsScreen/NotificationsBox';

function SettingsScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ContactsBox />
        <NotificationsBox />
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    gap: 25,
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
});
