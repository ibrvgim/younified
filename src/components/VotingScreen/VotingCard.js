import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { shadow } from '../../constants/shadow';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import useGetUserData from '../../hooks/auth/useGetUserData';
import useGetVotes from '../../hooks/votes/useGetVotes';
import { Ionicons } from '@expo/vector-icons';

function VotingCard({ title, startDate }) {
  const navigation = useNavigation();

  const { isLoading, userData } = useGetUserData();
  const { isGetting, allVotes } = useGetVotes();

  const submittedVotes = allVotes?.filter(
    (item) => item.votes_result.id === userData.id
  );

  const closeVote = submittedVotes?.some(
    (item) => item.votes_result.title === title
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>

      <Text style={styles.date}>Ends in 14 days | {startDate}</Text>
      {isGetting || isLoading ? (
        <View>
          <ActivityIndicator size='small' color={colors.blue300} />
        </View>
      ) : !closeVote ? (
        <Button
          handlePress={() => navigation.navigate('VotingQuestions', { title })}
        >
          Vote
        </Button>
      ) : (
        <View style={styles.closed}>
          <Ionicons name='lock-closed' size={19} color={colors.blue300} />
          <Text style={styles.closedText}>Submitted</Text>
        </View>
      )}
    </View>
  );
}

export default VotingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 12,

    ...shadow,
  },

  heading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  date: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
    color: colors.black50,
  },

  closed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  closedText: {
    textTransform: 'uppercase',
    color: colors.blue300,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    opacity: 0.8,
  },
});
