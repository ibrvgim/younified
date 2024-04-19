import { ScrollView, StyleSheet, View } from 'react-native';
import Input from '../../components/Input';
import KeyboardDismiss from '../../components/KeyboardDismiss';
import PerksCategories from '../../components/HomeScreen/PerksCategories';
import PerksList from '../../components/HomeScreen/PerksList';
import { colors } from '../../constants/colors';

function PerksScreen() {
  return (
    <KeyboardDismiss>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Input search={true} style={styles.input} placeholder='Search' />
        </View>

        <View style={styles.categoryBox}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesContainer}>
              <PerksCategories category='New & Local' active={true} />
              <PerksCategories category='Health & Fitness' />
              <PerksCategories category='Things To Do' />
              <PerksCategories category='Services' />
              <PerksCategories category='Salon & Spa' />
              <PerksCategories category='Shopping' />
            </View>
          </ScrollView>
        </View>

        <PerksList />
      </View>
    </KeyboardDismiss>
  );
}

export default PerksScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 30,
  },

  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 45,
  },

  categoryBox: {
    borderBottomColor: colors.white300,
    borderBottomWidth: 2,
  },

  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
