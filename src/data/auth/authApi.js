import supabase from '../supabase';

// USER SUGN UP
export async function userSignUp({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        firstName,
        lastName,
        phoneNumber,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// USER SUGN IN
export async function userSignIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// GET USER INFORMATION
export async function getUserData() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

// UPDATE USER INFORMATION
export async function updateUser({
  firstName,
  lastName,
  status,
  phoneNumber,
  street,
  city,
  postalCode,
}) {
  const { data, error } = await supabase.auth.updateUser({
    data: {
      firstName,
      lastName,
      status,
      phoneNumber,
      street,
      city,
      postalCode,
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// LOG OUT
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
