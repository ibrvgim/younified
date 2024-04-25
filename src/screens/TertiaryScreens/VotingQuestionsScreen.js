import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import OutlineButton from '../../components/OutlineButton';
import { colors } from '../../constants/colors';
import { voteQuestions } from '../../data/voteQuestions';
import { doneIcon } from '../../constants/svgs/servicesScreenIcons';
import { shadow } from '../../constants/shadow';
import useGetUserData from '../../hooks/auth/useGetUserData';
import useSetVotes from '../../hooks/votes/useSetVotes';

function VotingQuestionsScreen({ navigation, route }) {
  const { title } = route.params;
  const { userData } = useGetUserData();
  const { setVoteResult } = useSetVotes();

  const [question, setQuestion] = useState(0);
  const [finish, setFinish] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [results, setResults] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: false,
    });
  }, [navigation]);

  const voting = voteQuestions.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  ).vote;

  const currentQuestion = voting.at(question);
  const { options, question: mainQuestion } = currentQuestion;
  const questionsNumber = voting.length;
  const currentQuestionNumber = question + 1;
  const questionsLeft = questionsNumber - currentQuestionNumber;

  function handlePrevious() {
    setFinish(false);

    if (question > 0) {
      setQuestion(0);
      setResults([]);
    }

    if (submit) setSubmit(false);
  }

  function handleNext() {
    if (question < voting.length - 1 && answers.length > 0)
      setQuestion((question) => (question += 1));
  }

  function handleFinish() {
    if (answers.length > 0) setFinish(true);
  }

  function handleChoices(newAnswer) {
    const chosenAnswer = answers.findIndex((answer) => answer === newAnswer);

    if (chosenAnswer >= 0) {
      const newAnswers = answers.slice();
      newAnswers.splice(chosenAnswer, 1);
      setAnswers(newAnswers);
    }

    if (chosenAnswer < 0 && answers.length < 3)
      setAnswers((answers) => [...answers, newAnswer]);
  }

  function handleStoreAnswers() {
    const result = {
      question: mainQuestion,
      answers,
    };

    setResults((results) => [...results, result]);
  }

  function handleClearAnswers() {
    setAnswers([]);
  }

  function handleSubmit() {
    setSubmit(true);

    setVoteResult({ id: userData?.id, title, results });
  }

  if (submit) {
    return (
      <View style={styles.screen}>
        <View style={styles.doneContainer}>
          <View style={styles.background}>
            <View>{doneIcon}</View>
            <Text style={styles.doneText}>All Done!</Text>

            <Text style={styles.thanksText}>Thank you for participating!</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button handlePress={() => navigation.navigate('Services')}>
            Finish
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.questionsNumber}>
          {currentQuestionNumber} / {questionsNumber} questions
        </Text>
        <ProgressBar
          currentQuestion={currentQuestionNumber}
          questionsNumber={questionsNumber}
        />
        <Text style={styles.completeNumber}>
          {questionsLeft > 0
            ? `${questionsLeft} more to complete`
            : 'You have answered all the questions'}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.question}>{mainQuestion}</Text>
        <Text style={styles.description}>
          You must select at least <Text style={styles.strong}>1</Text> option!
        </Text>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <QuestionOptions
              key={option}
              option={option}
              handleChoices={handleChoices}
              answers={answers}
            />
          ))}
        </View>
      </View>

      <View
        style={[
          styles.buttonContainer,
          question > 0 && styles.buttonsContainer,
        ]}
      >
        {question > 0 && (
          <View style={[question > 0 && styles.button]}>
            <OutlineButton handlePress={handlePrevious}>
              {finish ? 'Change Selection' : 'Back'}
            </OutlineButton>
          </View>
        )}

        {finish ? (
          <View style={[question > 0 && styles.button]}>
            <Button
              handlePress={handleSubmit}
              styleButton={styles.submithButton}
            >
              Submit
            </Button>
          </View>
        ) : question + 1 === questionsNumber ? (
          <View style={[question > 0 && styles.button]}>
            <Button
              handlePress={() => {
                handleFinish();
                handleStoreAnswers();
              }}
            >
              Finish
            </Button>
          </View>
        ) : (
          <View style={[question > 0 && styles.button]}>
            <Button
              handlePress={() => {
                handleNext();
                handleStoreAnswers();
                handleClearAnswers();
              }}
            >
              Continue
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}

function QuestionOptions({ option, handleChoices, answers }) {
  const active = answers.includes(option);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.optionContainer,
        active && styles.chosenOption,
        pressed && styles.pressed,
      ]}
      onPress={() => handleChoices(option)}
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

  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  button: {
    flex: 1,
  },

  submithButton: {
    backgroundColor: colors.green,
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

  doneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  doneText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.green,
  },

  thanksText: {
    fontSize: 22,
    color: colors.black50,
  },

  background: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 40,

    ...shadow,
  },

  chosenOption: {
    borderColor: colors.blue300,
    borderWidth: 1,
  },
});
