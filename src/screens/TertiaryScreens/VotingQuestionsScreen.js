import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';

function VotingQuestionsScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: false,
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.questionsNumber}>1 / 3 questions</Text>
        <ProgressBar currentQuestion={1} questionsNumber={3} />
        <Text style={styles.completeNumber}>2 more to complete</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.question}>Favourite color?</Text>
        <Text style={styles.description}>
          You must select at least <Text style={styles.strong}>1</Text> option!
        </Text>

        <View style={styles.optionsContainer}>
          <QuestionOptions option='blue' />
          <QuestionOptions option='red' />
          <QuestionOptions option='green' />
          <QuestionOptions option='black' />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button>Next</Button>
      </View>
    </View>
  );
}

function QuestionOptions({ option }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.optionContainer,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.optionText}>{option}</Text>
    </Pressable>
  );
}

export default VotingQuestionsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    backgroundColor: colors.white100,
  },

  header: {
    backgroundColor: colors.white200,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  questionsNumber: {
    fontSize: 13,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  completeNumber: {
    fontWeight: '300',
    color: colors.black100,
  },

  buttonContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },

  question: {
    fontSize: 19,
    fontWeight: '500',
    letterSpacing: 1,
  },

  description: {
    fontWeight: '300',
    color: colors.black100,
    letterSpacing: 0.8,
  },

  strong: {
    fontWeight: '500',
    color: colors.blue100,
  },

  optionsContainer: {
    gap: 10,
    marginTop: 25,
  },

  // questionOptions

  optionContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 7,
    borderColor: '#999',
    borderWidth: 0.7,
  },

  optionText: {
    textTransform: 'capitalize',
    fontWeight: '400',
    letterSpacing: 0.7,
  },

  pressed: {
    opacity: 0.6,
  },
});
