import { ScrollView, StyleSheet, View } from 'react-native';
import Input from '../../components/Input';
import KeyboardDismiss from '../../components/KeyboardDismiss';
import PerksCategories from '../../components/HomeScreen/PerksCategories';
import PerksList from '../../components/HomeScreen/PerksList';
import { colors } from '../../constants/colors';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../slices/perksSlice';
import { useEffect, useState } from 'react';

const headerCategories = [
  'New & Local',
  'Health & Fitness',
  'Things to Do',
  'Services',
  'Salon & Spa',
  'Shopping',
];

const initialInputs = {
  perksSearch: '',
};

function PerksScreen() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(initialInputs);

  useEffect(() => {
    dispatch(setCategory('New & Local'));
  }, []);

  function handleCategory(data) {
    dispatch(setCategory(data));
  }

  function handleInputsValue(keyName, value) {
    setInputs((inputs) => ({ ...inputs, [keyName]: value }));
  }

  return (
    <KeyboardDismiss>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Input
            search={true}
            style={styles.input}
            placeholder='Search category'
            handleInputsValue={handleInputsValue}
            keyName='perksSearch'
            inputs={inputs}
          />
        </View>

        <View style={styles.categoryBox}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesContainer}>
              {headerCategories.map((item) => (
                <PerksCategories
                  category={item}
                  key={item}
                  handlePress={() => handleCategory(item)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        <PerksList inputs={inputs} />
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
