import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyboardDismiss from '../../components/KeyboardDismiss';
import { useEffect } from 'react';
import { colors } from '../../constants/colors';

function ProfileScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton />,
    });
  }, []);

  return (
    <KeyboardDismiss>
      <ScrollView>
        <View>
          <Text>profile</Text>
        </View>
      </ScrollView>
    </KeyboardDismiss>
  );
}

function SaveButton() {
  return (
    <Pressable style={styles.saveButton}>
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
});
