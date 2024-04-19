import { StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import OutlineButton from '../../components/OutlineButton';

function ProfileCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <Text style={styles.description}>
        Edit your personal information at any time
      </Text>

      <View style={styles.inputsContainer}>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <Input placeholder='Username' />
        <Input placeholder='Status' />
        <Input placeholder='Unit' />
        <Input placeholder='Employment Status' />
        <Input placeholder='Union Position' />
        <Input placeholder='Phone Number' type='phone-pad' />
        <Input placeholder='Street' />
        <Input placeholder='City' />
        <Input placeholder='Postal Code' />
      </View>

      <OutlineButton>Reset</OutlineButton>
    </View>
  );
}

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
  },

  inputsContainer: {
    gap: 15,
    borderTopWidth: 2,
    borderTopColor: colors.white300,
    paddingVertical: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1,
    color: colors.blue400,
    marginBottom: 5,
  },

  description: {
    marginBottom: 20,
    fontSize: 15,
    color: colors.black50,
  },
});
