import Input from '../components/Input';
import AuthWindow from '../components/AuthWindow';
import Button from '../components/Button';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import KeyboardDismiss from '../components/KeyboardDismiss';
import { useState } from 'react';

function SignInScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);

  function handleShowPassword() {
    setHidePassword((hide) => !hide);
  }

  return (
    <KeyboardDismiss>
      <AuthWindow title='Log into your account'>
        <View style={styles.inputsContainer}>
          <Input placeholder='Email' type='email-address' />
          <Input
            placeholder='Password'
            secure={hidePassword}
            showPassword={true}
            handleShowPassword={handleShowPassword}
            hidePassword={hidePassword}
          />

          <View style={styles.forgotContainer}>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>
        </View>

        <Button>Sign in</Button>

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
