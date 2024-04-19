import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function ContactsBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts</Text>

      <View style={styles.informationBox}>
        <View style={styles.informationItem}>
          <Ionicons name='call' size={24} color={colors.blue100} />
          <Text style={styles.informationText}>(647) 776 - 0950</Text>
        </View>

        <View style={styles.informationItem}>
          <Ionicons name='mail' size={24} color={colors.blue100} />
          <Text style={styles.informationText}>
            contact@unionstrategiesinc.com
          </Text>
        </View>

        <View style={styles.informationItem}>
          <Ionicons name='location' size={24} color={colors.blue100} />
          <Text style={styles.informationText}>
            87 Caster Avenue Woodbridge, Otario L4L5ZZ2
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ContactsBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 18,
    paddingBottom: 25,
    gap: 18,

    ...shadow,
  },

  heading: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 30,
  },

  informationBox: {
    gap: 20,
    borderTopColor: colors.white400,
    borderTopWidth: 2,
    paddingTop: 20,
    paddingHorizontal: 30,
  },

  informationItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  informationText: {
    fontSize: 14.5,
    letterSpacing: 0.5,
    paddingRight: 30,
  },
});
