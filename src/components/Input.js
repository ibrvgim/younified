import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function Input({
  placeholder,
  type,
  secure = false,
  showPassword = false,
  search = false,
  handleShowPassword,
  hidePassword,
  style,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={secure}
      />

      {showPassword && (
        <Pressable
          style={({ pressed }) => [styles.opacity, pressed && styles.pressed]}
          onPress={handleShowPassword}
        >
          {hidePassword ? (
            <Ionicons
              style={styles.icon}
              name='eye'
              size={22}
              color={colors.blue300}
            />
          ) : (
            <Ionicons
              style={styles.icon}
              name='eye-off'
              size={22}
              color={colors.blue300}
            />
          )}
        </Pressable>
      )}

      {search && (
        <Pressable
          style={({ pressed }) => [styles.opacity, pressed && styles.pressed]}
          onPress={handleShowPassword}
        >
          <Ionicons
            style={styles.iconSearch}
            name='search'
            size={24}
            color={colors.black50}
          />
        </Pressable>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    height: 56,
    width: '100%',
    borderColor: colors.white300,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 16,
  },

  icon: {
    marginLeft: -37,
  },

  iconSearch: {
    marginLeft: -43,
  },

  opacity: {
    opacity: 0.7,
  },

  pressed: {
    opacity: 1,
  },
});
