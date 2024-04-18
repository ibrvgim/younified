import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeItem from '../../components/HomeScreen/HomeItem';
import {
  documentIcon,
  executivesIcon,
  grievancesIcon,
  perksIcon,
  profileIcon,
} from '../../constants/svgs/homeScreenIcons';
import * as Svg from 'react-native-svg';

function HomeScreen({ navigation }) {
  function handleNavigation(path) {
    // navigation.navigate(path);
  }

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <HomeItem
          title='Documents'
          description='All your documents here'
          handlePress={() => handleNavigation('')}
        >
          <View>{documentIcon}</View>
        </HomeItem>

        <HomeItem
          title='Executives'
          description='Find executives here'
          handlePress={() => handleNavigation('')}
        >
          <View>{executivesIcon}</View>
        </HomeItem>

        <HomeItem
          title='Profile'
          description='Manage your profile here'
          handlePress={() => handleNavigation('')}
        >
          <View>{profileIcon}</View>
        </HomeItem>

        <HomeItem
          title='Grievances'
          description='See grievances here'
          handlePress={() => handleNavigation('')}
        >
          <View>{grievancesIcon}</View>
        </HomeItem>

        <HomeItem
          title='Perks'
          description='Check out the available perks'
          handlePress={() => handleNavigation('')}
        >
          <View>{perksIcon}</View>
        </HomeItem>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    marginVertical: 30,
    gap: 15,
  },
});
