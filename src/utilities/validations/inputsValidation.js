export function formatInput(inputLength, value) {
  if (value.length < inputLength) return false;
  else return true;
}

export function formatEmail(email) {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  return validateEmailRegex.test(email);
}

export function formatPhoneNumber(number) {
  const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
  return validatePhoneNumberRegex.test(number);
}
