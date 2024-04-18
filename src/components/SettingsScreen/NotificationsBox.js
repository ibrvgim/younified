import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { Entypo } from '@expo/vector-icons';

function NotificationsBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Union Notifications</Text>

      <View style={styles.controlBox}>
        <View style={styles.controlItem}>
          <Text style={styles.controlText}>Union Notifications</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>

        <View style={styles.controlItem}>
          <Text style={styles.controlText}>Allow call drops</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>

        <View style={styles.controlItem}>
          <Text style={styles.controlText}>Allow text messages</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>

        <View style={styles.controlItem}>
          <Text style={styles.controlText}>Allow emails</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>

        <View style={styles.controlItem}>
          <Text style={styles.controlText}>Allow push notifications</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>

        <View style={[styles.controlItem, styles.lastControlItem]}>
          <Text style={styles.controlText}>Allow registration emails</Text>
          <Entypo name='switch' size={20} color={colors.blue100} />
        </View>
      </View>
    </View>
  );
}

export default NotificationsBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 18,
    paddingBottom: 5,
    gap: 18,

    elevation: 4,
    shadowColor: colors.black100,
    shadowOpacity: 0.25,
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 7,
  },

  heading: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 30,
  },

  controlBox: {
    borderTopColor: colors.white400,
    borderTopWidth: 2,
  },

  controlItem: {
    borderBottomColor: colors.white200,
    borderBottomWidth: 1.1,
    paddingVertical: 15,
    paddingHorizontal: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lastControlItem: {
    borderBottomWidth: 0,
  },

  controlText: {
    fontSize: 16,
  },
});
