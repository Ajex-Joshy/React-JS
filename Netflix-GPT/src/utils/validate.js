import validator from "validator";

export const validateForm = (
  firstName,
  lastName,
  emailOrMob,
  password,
  confirmPassword,
  isSignIn
) => {
  if (!emailOrMob || !password) return "All fields are required";
  if (validator.isNumeric(emailOrMob)) {
    if (!validator.isMobilePhone(emailOrMob))
      return "Enter a valid mobile number";
  } else if (!validator.isEmail(emailOrMob)) return "Enter a valid email id";
  if (!validator.isStrongPassword(password)) return "Enter a strong password";
12
  if (!isSignIn) {
    if (!validator.isAlpha(firstName))
      return "First name should be an alphabet";
    if (!validator.isAlpha(lastName)) return "Last name should be an alphabet";
    if (password !== confirmPassword) return "password does not match";
  }

  return null;
};
