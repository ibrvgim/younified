import { useMutation } from '@tanstack/react-query';
import { setVotes } from '../../data/votes/votesApi';
import { Alert } from 'react-native';

function useSetVotes() {
  const { mutate: setVoteResult } = useMutation({
    mutationFn: setVotes,

    onError: (error) => {
      Alert.alert('SOmething is wrong', error.message);
    },
  });

  return { setVoteResult };
}

export default useSetVotes;
