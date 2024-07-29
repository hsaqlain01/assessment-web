import * as Yup from 'yup';

const commonValidations = {
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(15, 'Username cannot be longer than 15 characters')
    .matches(
      /^[a-zA-Z0-9_]*$/,
      'Username can only contain letters, numbers, and underscores'
    ),
  password: Yup.string().required('Password is required').min(6),
};
export const loginValidationSchema = Yup.object().shape({
  ...commonValidations,
});

export const registerValidationSchema = Yup.object().shape({
  ...commonValidations,
  email: Yup.string().required('Email is required').email('Invalid email'),
});
