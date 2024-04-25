import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutUser } from '../../data/auth/authApi';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../slices/authenticationSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function useSignOut() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { isPending: isSigningOut, mutate: signOut } = useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      dispatch(setAuthentication(false));
      // AsyncStorage.removeItem('authentication');
    },

    onError: (error) => {
      Alert.alert('Something is wrong', error.message);
    },
  });

  return { isSigningOut, signOut };
}

export default useSignOut;
