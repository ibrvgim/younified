import Input from '../components/Input';
import AuthWindow from '../components/AuthWindow';
import Button from '../components/Button';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../constants/colors';
import KeyboardDismiss from '../components/KeyboardDismiss';
import { useState } from 'react';
import useSignIn from '../hooks/auth/useSignIn';
import {
  formatEmail,
  formatInput,
} from '../utilities/validations/inputsValidation';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmailError,
  setPasswordError,
} from '../slices/inputsValidationSlice';

const initialInputs = {
  email: '',
  password: '',
};

function SignInScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [inputs, setInputs] = useState(initialInputs);
  const { isLogining, getUserIn } = useSignIn();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.validation);

  function handleInputsValue(keyName, value) {
    setInputs((inputs) => ({ ...inputs, [keyName]: value }));
  }

  function handleSignin() {
    const isValidEmail = formatEmail(inputs.email);
    const isValidPassword = formatInput(8, inputs.password);

    if (!isValidPassword)
      dispatch(setPasswordError('Password must be at least 8 characters'));
    else dispatch(setPasswordError(''));

    if (!isValidEmail) dispatch(setEmailError('Email must be valid'));
    else dispatch(setEmailError(''));

    if (isValidEmail && isValidPassword) getUserIn(inputs);
  }

  function handleShowPassword() {
    setHidePassword((hide) => !hide);
  }

  return (
    <KeyboardDismiss>
      <AuthWindow title='Log into your account'>
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
            placeholder='Password'
            secure={hidePassword}
            showPassword={true}
            handleShowPassword={handleShowPassword}
            hidePassword={hidePassword}
            handleInputsValue={handleInputsValue}
            keyName='password'
            inputs={inputs}
            error={errors.password}
          />

          <View style={styles.forgotContainer}>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>
        </View>

        <Button handlePress={handleSignin} disabled={isLogining}>
          {isLogining ? (
            <ActivityIndicator size='small' color='#fff' />
          ) : (
            'Sign in'
          )}
        </Button>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>If you don't have an account -</Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.switchText, styles.signupText]}>Sign up</Text>
          </Pressable>
        </View>
      </AuthWindow>
    </KeyboardDismiss>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    gap: 10,
    marginBottom: 30,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 20,
  },

  switchText: {
    fontSize: 15,
    fontWeight: '300',
  },

  signupText: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: colors.blue50,
    letterSpacing: 0.5,
    fontWeight: '400',
  },

  pressed: {
    opacity: 0.5,
  },

  forgotContainer: {
    alignItems: 'flex-end',
  },

  forgotText: {
    color: colors.blue50,
    letterSpacing: 0.7,
    fontWeight: '300',
  },
});
