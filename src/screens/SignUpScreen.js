import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AuthWindow from '../components/AuthWindow';
import Input from '../components/Input';
import Button from '../components/Button';
import OutlineButton from '../components/OutlineButton';
import KeyboardDismiss from '../components/KeyboardDismiss';
import { useState } from 'react';
import useSignUp from '../hooks/auth/useSignUp';

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

  function handleInputsValue(keyName, value) {
    setInputs((values) => ({ ...values, [keyName]: value }));
  }

  function handleSubmit() {
    const { email, firstName, lastName, phoneNumber, password } = inputs;
    createUser({ email, password, firstName, lastName, phoneNumber });
    // setInputs(initialValues);
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
          />

          <Input
            placeholder='First Name'
            handleInputsValue={handleInputsValue}
            keyName='firstName'
            inputs={inputs}
          />

          <Input
            placeholder='Last Name'
            handleInputsValue={handleInputsValue}
            keyName='lastName'
            inputs={inputs}
          />

          <Input
            placeholder='Phone Number'
            type='phone-pad'
            handleInputsValue={handleInputsValue}
            keyName='phoneNumber'
            inputs={inputs}
          />

          <Input
            placeholder='Password'
            secure={true}
            handleInputsValue={handleInputsValue}
            keyName='password'
            inputs={inputs}
          />

          <Input
            placeholder='Confirm Password'
            secure={true}
            handleInputsValue={handleInputsValue}
            keyName='confirmPassword'
            inputs={inputs}
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
