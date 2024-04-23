import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AuthWindow from '../components/AuthWindow';
import Input from '../components/Input';
import Button from '../components/Button';
import OutlineButton from '../components/OutlineButton';
import KeyboardDismiss from '../components/KeyboardDismiss';
import { useState } from 'react';
import useSignUp from '../hooks/auth/useSignUp';
import { useDispatch, useSelector } from 'react-redux';
import {
  formatEmail,
  formatInput,
  formatPhoneNumber,
} from '../utilities/validations/inputsValidation';
import {
  setEmailError,
  setPasswordError,
  setConfirmPasswordError,
  setFirstNameError,
  setLastNameError,
  setPhoneNumberError,
} from '../slices/inputsValidationSlice';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

function SignUpScreen({ navigation }) {
  const [inputs, setInputs] = useState(initialValues);
  const { isCreating, createUser } = useSignUp();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.validation);

  function handleInputsValue(keyName, value) {
    setInputs((values) => ({ ...values, [keyName]: value }));
  }

  function validateAllInputs() {
    const isValidEmail = formatEmail(inputs.email);
    const isValidPassword = formatInput(8, inputs.password);
    const isValidConfirmPassword = formatInput(8, inputs.confirmPassword);
    const isSamePasswords = inputs.password === inputs.confirmPassword;
    const isValidFirstName = formatInput(2, inputs.firstName);
    const isValidLastName = formatInput(2, inputs.lastName);
    const isValidPhoneNumber = formatPhoneNumber(inputs.phoneNumber);

    if (!isValidEmail) dispatch(setEmailError('Email must be valid'));
    else dispatch(setEmailError(''));

    if (!isValidPassword)
      dispatch(setPasswordError('Password must be at least 8 characters'));
    else dispatch(setPasswordError(''));

    if (!isSamePasswords)
      dispatch(setConfirmPasswordError('Passwords must be the same '));
    else dispatch(setConfirmPasswordError(''));

    if (!isValidFirstName)
      dispatch(setFirstNameError('Must be at least 2 characters'));
    else dispatch(setFirstNameError(''));

    if (!isValidLastName)
      dispatch(setLastNameError('Must be at least 2 characters'));
    else dispatch(setLastNameError(''));

    if (!isValidPhoneNumber)
      dispatch(setPhoneNumberError('Incorrect phone number format'));
    else dispatch(setPhoneNumberError(''));

    if (
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isSamePasswords &&
      isValidFirstName &&
      isValidLastName &&
      isValidPhoneNumber
    )
      return true;
    else return false;
  }

  function handleSubmit() {
    const { email, firstName, lastName, phoneNumber, password } = inputs;
    const isAllValid = validateAllInputs();

    if (isAllValid) {
      createUser({ email, password, firstName, lastName, phoneNumber });
      setInputs(initialValues);
    }
  }

  return (
    <KeyboardDismiss>
      <AuthWindow title='Join Our Union Community'>
        <View style={styles.inputsContainer}>
          <Input
            placeholder='Email'
            type='email-address'
            handleInputsValue={handleInputsValue}
            keyName='email'
            inputs={inputs}
            error={errors.email}
          />

          <Input
            placeholder='First Name'
            handleInputsValue={handleInputsValue}
            keyName='firstName'
            inputs={inputs}
            error={errors.firstName}
          />

          <Input
            placeholder='Last Name'
            handleInputsValue={handleInputsValue}
            keyName='lastName'
            inputs={inputs}
            error={errors.lastName}
          />

          <Input
            placeholder='Phone Number'
            type='phone-pad'
            handleInputsValue={handleInputsValue}
            keyName='phoneNumber'
            inputs={inputs}
            error={errors.phoneNumber}
          />

          <Input
            placeholder='Password'
            secure={true}
            handleInputsValue={handleInputsValue}
            keyName='password'
            inputs={inputs}
            error={errors.password}
          />

          <Input
            placeholder='Confirm Password'
            secure={true}
            handleInputsValue={handleInputsValue}
            keyName='confirmPassword'
            inputs={inputs}
            error={errors.confirmPassword}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <OutlineButton handlePress={() => navigation.goBack()}>
              Back
            </OutlineButton>
          </View>

          <View style={styles.buttonContainer}>
            <Button handlePress={handleSubmit} disabled={isCreating}>
              {isCreating ? (
                <ActivityIndicator size='small' color='#fff' />
              ) : (
                'Sign Up'
              )}
            </Button>
          </View>
        </View>
      </AuthWindow>
    </KeyboardDismiss>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    gap: 10,
    marginBottom: 30,
  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
  },
});
