import { useEffect } from 'react';
import { Text, View } from 'react-native';

function VotingQuestionsScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: false,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Questions here!</Text>
    </View>
  );
}

export default VotingQuestionsScreen;
