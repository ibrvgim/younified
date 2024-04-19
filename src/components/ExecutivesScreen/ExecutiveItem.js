import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { shadow } from '../../constants/shadow';

function ExecutiveItem({ fullName, position, image, email, number }) {
  return (
    <View style={styles.container}>
      <View style={styles.personInfo}>
        <Image style={styles.image} source={image} />

        <View>
          <Text style={styles.personName}>{fullName}</Text>
          <Text style={styles.personPosition}>{position}</Text>
        </View>
      </View>

      <View style={styles.personalInformation}>
        <Text style={styles.email}>{email}</Text>

        <View style={styles.phoneContainer}>
          <Text style={styles.numberLabel}>Office</Text>
          <Text style={styles.number}>{number}</Text>
        </View>
      </View>
    </View>
  );
}

export default ExecutiveItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,

    ...shadow,
  },

  personInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 20,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },

  personName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },

  personPosition: {
    fontSize: 11.5,
    textTransform: 'uppercase',
    color: colors.black50,
  },

  personalInformation: {
    gap: 15,
    borderTopColor: colors.white200,
    borderTopWidth: 2,
    paddingTop: 20,
  },

  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  email: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.blue50,
  },

  numberLabel: {
    fontSize: 15,
    fontWeight: '700',
  },

  number: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black50,
  },
});
