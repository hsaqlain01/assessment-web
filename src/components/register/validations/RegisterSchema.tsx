import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .matches(
      /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
      'Password must contain at least one special character'
    ),
});
