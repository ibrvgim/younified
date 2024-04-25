import { useQuery } from '@tanstack/react-query';
import { getVotes } from '../../data/votes/votesApi';

function useGetVotes() {
  const { isPending: isGetting, data: allVotes } = useQuery({
    queryKey: ['votes'],
    queryFn: getVotes,
  });

  return { isGetting, allVotes };
}

export default useGetVotes;
