import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function SettingsBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>System Settings</Text>

      <View style={styles.settingsBox}>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText}>Language</Text>
          <Text style={styles.settingsText}>English</Text>
        </View>

        <View style={[styles.settingsItem, styles.lastSettingsItem]}>
          <Text style={styles.settingsText}>Version</Text>
          <Text style={styles.settingsText}>1.6.17</Text>
        </View>
      </View>
    </View>
  );
}

export default SettingsBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 18,
    paddingBottom: 5,
    gap: 18,

    ...shadow,
  },

  heading: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 30,
  },

  settingsBox: {
    borderTopColor: colors.white400,
    borderTopWidth: 2,
  },

  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.white400,
    borderBottomWidth: 1.1,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  settingsText: {
    fontSize: 16,
  },

  lastSettingsItem: {
    borderBottomWidth: 0,
  },
});
