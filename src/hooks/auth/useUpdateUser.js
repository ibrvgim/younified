import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../data/auth/authApi';
import { Alert } from 'react-native';

function useUpdateUser() {
  const { isPending: isUpdating, mutate: updateUserData } = useMutation({
    mutationFn: updateUser,

    onError: (error) => {
      Alert.alert('Something is worng', error.message);
    },
  });

  return { isUpdating, updateUserData };
}

export default useUpdateUser;
