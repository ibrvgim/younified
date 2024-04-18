import { StyleSheet, View } from 'react-native';
import ServiceItem from '../../components/ServicesScreen/ServiceItem';
import {
  phoneIcon,
  votingIcon,
} from '../../constants/svgs/servicesScreenIcons';

function ServicesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ServiceItem title='Voting' description='Active elections and vote'>
          <View>{votingIcon}</View>
        </ServiceItem>

        <ServiceItem title='Call Us' description='Get in touch with us'>
          <View>{phoneIcon}</View>
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
