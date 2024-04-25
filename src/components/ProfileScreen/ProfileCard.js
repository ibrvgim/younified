import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import OutlineButton from '../../components/OutlineButton';
import Button from '../../components/Button';
import { shadow } from '../../constants/shadow';
import useGetUserData from '../../hooks/auth/useGetUserData';
import { useState } from 'react';
import useUpdateUser from '../../hooks/auth/useUpdateUser';

const initialValues = {
  firstName: '',
  lastName: '',
  status: '',
  phoneNumber: '',
  street: '',
  city: '',
  postalCode: '',
};

function ProfileCard() {
  const [inputs, setInputs] = useState(initialValues);
  const { isUpdating, updateUserData } = useUpdateUser();

  const { userData } = useGetUserData();
  if (!userData) return;

  const { email } = userData;
  const { firstName, lastName, phoneNumber, status, street, city, postalCode } =
    userData?.user_metadata;

  function handleInputsValue(keyName, value) {
    setInputs((values) => ({ ...values, [keyName]: value }));
  }

  function handleSave() {
    updateUserData(inputs);
  }

  function handleReset() {
    setInputs(initialValues);
  }

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
          <Text style={styles.userName}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.userEmail}>
            {email?.length < 26 ? email : email?.slice(0, 24) + '...'}
          </Text>
        </View>
      </View>

      <View style={styles.inputsContainer}>
        <Input
          placeholder='First Name'
          handleInputsValue={handleInputsValue}
          keyName='firstName'
          inputs={inputs}
          defaultValue={firstName}
        />

        <Input
          placeholder='Last Name'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='lastName'
          defaultValue={lastName}
        />

        <Input
          placeholder='Status'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='status'
          defaultValue={status}
        />

        <Input
          placeholder='Phone Number'
          type='phone-pad'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='phoneNumber'
          defaultValue={phoneNumber}
        />

        <Input
          placeholder='Street'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='street'
          defaultValue={street}
        />

        <Input
          placeholder='City'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='city'
          defaultValue={city}
        />

        <Input
          placeholder='Postal Code'
          handleInputsValue={handleInputsValue}
          inputs={inputs}
          keyName='postalCode'
          defaultValue={postalCode}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <OutlineButton handlePress={handleReset}>Reset</OutlineButton>
        </View>

        <View style={styles.buttonContainer}>
          <Button handlePress={handleSave} disabled={isUpdating}>
            {isUpdating ? (
              <ActivityIndicator size='small' color='#fff' />
            ) : (
              'Save'
            )}
          </Button>
        </View>
      </View>
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

  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
  },

  buttonContainer: {
    flex: 1,
  },
});
