import * as yup from 'yup';
import { bakeryApi, UserDtoRegistration } from '@shared/api';

export const useRegistrationForm = () => {
  const schema = yup.object({
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const submit = async (payload: UserDtoRegistration) => {
    const {
      data,
      loading,
      error,
      errorMessage,
      errorDetails,
      errorFields,
    } = await bakeryApi.auth.register(payload)

    console.log(data,
      loading,
      error,
      errorMessage,
      errorDetails,
      errorFields)
  };

  return {
    submit,
    schema,
  };
}
