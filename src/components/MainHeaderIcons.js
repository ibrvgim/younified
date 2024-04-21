import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

function MainHeaderIcons() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Ionicons
          style={styles.icon}
          name='notifications-outline'
          size={26}
          color='black'
        />
      </Pressable>

      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons
          style={styles.icon}
          name='chatbubbles-outline'
          size={26}
          color='black'
        />
      </Pressable>
    </View>
  );
}

export default MainHeaderIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 20,
  },

  icon: {
    color: colors.black50,
  },

  pressed: {
    opacity: 0.5,
  },
});
