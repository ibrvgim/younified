import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyboardDismiss from '../../components/KeyboardDismiss';
import { useEffect } from 'react';
import { colors } from '../../constants/colors';
import ProfileCard from '../../components/ProfileScreen/ProfileCard';

function ProfileScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton />,
    });
  }, []);

  return (
    <KeyboardDismiss>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileCard />
      </ScrollView>
    </KeyboardDismiss>
  );
}

function SaveButton() {
  return (
    <Pressable
      style={({ pressed }) => [styles.saveButton, pressed && styles.pressed]}
    >
      <Text style={styles.saveText}>Save</Text>
    </Pressable>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  saveButton: {
    paddingHorizontal: 25,
  },

  saveText: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.blue400,
  },

  pressed: {
    opacity: 0.5,
  },
});
