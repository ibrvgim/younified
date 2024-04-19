import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import { shadow } from '../constants/shadow';

function AuthWindow({ children, title }) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require('../../assets/images/background.png')}
        resizeMode='cover'
      >
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo.png')} />

          <View style={styles.authWindow}>
            <Text style={styles.header}>{title}</Text>

            {children}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default AuthWindow;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },

  authWindow: {
    backgroundColor: '#fff',
    width: '85%',
    paddingHorizontal: 25,
    paddingVertical: 40,
    borderRadius: 10,

    ...shadow,
  },

  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    letterSpacing: 0.7,
    color: colors.black300,
  },
});
