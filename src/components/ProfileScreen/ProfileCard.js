import { Image, StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import OutlineButton from '../../components/OutlineButton';
import { shadow } from '../../constants/shadow';
import useGetUserData from '../../hooks/auth/useGetUserData';
import { useEffect } from 'react';

function ProfileCard() {
  const { userData } = useGetUserData();

  const email = `alex@gmail.com`;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <Text style={styles.description}>
        Edit your personal information at any time
      </Text>

      <View style={styles.imageNameContainer}>
        <Image
          style={styles.user}
          source={require('../../../assets/images/user.png')}
        />
        <View>
          <Text style={styles.userName}>Alex Hoffmann</Text>
          <Text style={styles.userEmail}>
            {email?.length < 26 ? email : email?.slice(0, 24) + '...'}
          </Text>
        </View>
      </View>

      <View style={styles.inputsContainer}>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
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

    ...shadow,
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

  imageNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },

  user: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  userName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: colors.black200,
  },

  userEmail: {
    color: colors.black50,
    paddingRight: 20,
  },
});
