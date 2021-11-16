import * as yup from 'yup';
import { bakeryApi, UserDto } from '@src/shared/api';

export const useLoginForm = () => {
  const schema = yup.object({
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
  });

  const submit = async (payload: UserDto, actions: { resetForm: () => void; }) => {
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

    actions.resetForm();
  };

  return {
    submit,
    schema,
  };
}
