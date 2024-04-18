import { ScrollView, StyleSheet, View } from 'react-native';
import ExecutiveItem from '../../components/ExecutivesScreen/ExecutiveItem';

function ExecutivesScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ExecutiveItem
          fullName='Fred Vecchino'
          position='Director'
          email='fred.vecchino@unionstrategiesinc.com'
          number='(647) 776 - 0950 EXT.874'
          image={require('../../../assets/executives/director.jpg')}
        />

        <ExecutiveItem
          fullName='Lina Vecchio'
          position='Administrator'
          email='lina.vecchino@unionstrategiesinc.com'
          number='(647) 776 - 0950 EXT.879'
          image={require('../../../assets/executives/administrator.jpg')}
        />

        <ExecutiveItem
          fullName='Leeanne Ward'
          position='Director of Operations'
          email='leeanne.ward@unionstrategiesinc.com'
          number='(647) 776 - 0950 EXT.884'
          image={require('../../../assets/executives/director_of_operations.jpg')}
        />
      </View>
    </ScrollView>
  );
}

export default ExecutivesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    gap: 20,
  },
});
