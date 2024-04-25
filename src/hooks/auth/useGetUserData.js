import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../data/auth/authApi';

function useGetUserData() {
  const { isLoading, data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });

  return {
    isLoading,
    userData,
  };
}

export default useGetUserData;
