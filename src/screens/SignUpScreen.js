import { StyleSheet, View } from 'react-native';
import AuthWindow from '../components/AuthWindow';
import Input from '../components/Input';
import Button from '../components/Button';
import OutlineButton from '../components/OutlineButton';
import KeyboardDismiss from '../components/KeyboardDismiss';

function SignUpScreen({ navigation }) {
  return (
    <KeyboardDismiss>
      <AuthWindow title='Join Our Union Community'>
        <View style={styles.inputsContainer}>
          <Input placeholder='Email' type='email-address' />
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Phone Number' type='phone-pad' />
          <Input placeholder='Password' secure={true} />
          <Input placeholder='Confirm Password' secure={true} />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <OutlineButton handlePress={() => navigation.goBack()}>
              Back
            </OutlineButton>
          </View>

          <View style={styles.buttonContainer}>
            <Button>Sign up</Button>
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
