import { Image, StyleSheet, View } from 'react-native';
import ServiceItem from '../../components/ServicesScreen/ServiceItem';

function ServicesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ServiceItem title='Voting' description='Active elections and vote'>
          <Image source={require('../../../assets/images/vote.png')} />
        </ServiceItem>

        <ServiceItem title='Call Us' description='Get in touch with us'>
          <Image source={require('../../../assets/images/phone.png')} />
        </ServiceItem>
      </View>
    </View>
  );
}

export default ServicesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    alignItems: 'center',
    marginVertical: 30,
    gap: 15,
  },
});
