import * as Yup from 'yup';

export const createValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required').min(15),
});
