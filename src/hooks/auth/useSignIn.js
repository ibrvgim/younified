import { useMutation } from '@tanstack/react-query';
import { userSignIn } from '../../data/auth/authApi';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../slices/authenticationSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useSignIn() {
  const dispatch = useDispatch();

  const { isPending: isLogining, mutate: getUserIn } = useMutation({
    mutationFn: userSignIn,

    onSuccess: (data) => {
      const isAuthenticated = data.session?.user?.role === 'authenticated';
      dispatch(setAuthentication(isAuthenticated));
      AsyncStorage.setItem('authentication', isAuthenticated.toString());
    },

    onError: (error) => {
      Alert.alert('Something is wrong', error.message);
    },
  });

  return { isLogining, getUserIn };
}

export default useSignIn;
