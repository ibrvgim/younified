import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
} from 'react-native';

function KeyboardDismiss({ children }) {
  return (
    <KeyboardAvoidingView style={styles.screen} behavior='padding'>
      <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default KeyboardDismiss;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
