import { useMutation } from '@tanstack/react-query';
import { userSignUp } from '../../data/auth/authApi';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../slices/authenticationSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function useSignUp() {
  const dispatch = useDispatch();

  const { isPending: isCreating, mutate: createUser } = useMutation({
    mutationFn: userSignUp,

    onSuccess: (data) => {
      const isAuthenticated = data.session?.user?.role === 'authenticated';

      dispatch(setAuthentication(isAuthenticated));
      // AsyncStorage.setItem('authentication', isAuthenticated.toString());
    },

    onError: (error) => {
      Alert.alert('Something is wrong', error.message);
    },
  });

  return { isCreating, createUser };
}

export default useSignUp;
