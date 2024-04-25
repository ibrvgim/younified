import { ScrollView } from 'react-native';
import KeyboardDismiss from '../../components/KeyboardDismiss';
import ProfileCard from '../../components/ProfileScreen/ProfileCard';
import { useEffect } from 'react';

function ProfileScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {},
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

export default ProfileScreen;
