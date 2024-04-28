import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PerksItem from './PerksItem';
import { perks } from '../../data/perks';
import { useSelector } from 'react-redux';
import { shadow } from '../../constants/shadow';
import { colors } from '../../constants/colors';

function PerksList({ inputs }) {
  const category = useSelector((state) => state.perks.category);
  const categorize = perks.filter((item) =>
    item.categories.includes(inputs.perksSearch || category)
  );

  if (!categorize.length)
    return (
      <View style={[styles.container, styles.comingSoon]}>
        <Text style={styles.comingSoonText}>Coming soon</Text>
        <ActivityIndicator
          style={styles.indicator}
          size='large'
          color={colors.blue300}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={categorize}
        renderItem={({ item }) => <PerksItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default PerksList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  comingSoon: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '20%',
    marginHorizontal: 20,
    borderRadius: 10,
    ...shadow,
  },

  comingSoonText: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '500',
  },

  indicator: {
    marginTop: 20,
  },
});
