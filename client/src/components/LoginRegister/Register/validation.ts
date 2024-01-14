export const validateUserName = (userName: string): boolean => {
  return userName.length >= 4;
};

export const validateEmail = (email: string): boolean => {
  return email.includes('@');
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*.]).{6,}$/;
  return passwordRegex.test(password);
};
