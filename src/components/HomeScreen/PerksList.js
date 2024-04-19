import { ScrollView, StyleSheet, View } from 'react-native';
import PerksItem from './PerksItem';

function PerksList() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <PerksItem
          image={require('../../../assets/perks/vegas_hotel.jpg')}
          title='Vegas Hotel'
          description='Breakfast included'
          rating={5}
          price={15}
          duration='daily'
        />

        <PerksItem
          image={require('../../../assets/perks/spa.jpg')}
          title='Salon & Spa'
          description='Massage included'
          rating={4}
          price={35}
          duration='hour'
        />

        <PerksItem
          image={require('../../../assets/perks/gym.jpg')}
          title='Manifest Gym'
          description='Shower, towels'
          rating={5}
          price={65}
          duration='hour'
        />

        <PerksItem
          image={require('../../../assets/perks/shopping.jpg')}
          title='Gift Card'
          description='All stores included'
          rating={3}
          price={90}
          duration='once'
        />
      </View>
    </ScrollView>
  );
}

export default PerksList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,

    gap: 15,
  },
});
