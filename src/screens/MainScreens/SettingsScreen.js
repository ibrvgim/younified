import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContactsBox from '../../components/SettingsScreen/ContactsBox';
import NotificationsBox from '../../components/SettingsScreen/NotificationsBox';
import SettingsBox from '../../components/SettingsScreen/SettingsBox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function SettingsScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ContactsBox />
        <NotificationsBox />
        <SettingsBox />

        <Pressable
          style={({ pressed }) => [
            styles.signoutContainer,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.signoutText}>Sign Out</Text>
          <MaterialCommunityIcons
            name='location-exit'
            size={24}
            color={colors.red}
          />
        </Pressable>
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

  signoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15,

    ...shadow,
  },

  signoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.red,
  },

  pressed: {
    opacity: 0.7,
  },
});
