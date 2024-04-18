import { ScrollView, StyleSheet, View } from 'react-native';
import ContactsBox from '../../components/SettingsScreen/ContactsBox';
import NotificationsBox from '../../components/SettingsScreen/NotificationsBox';
import SettingsBox from '../../components/SettingsScreen/SettingsBox';

function SettingsScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ContactsBox />
        <NotificationsBox />
        <SettingsBox />
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
