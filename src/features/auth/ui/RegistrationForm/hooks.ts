import * as yup from 'yup';
import { ref } from 'vue';
import { IUserDtoRegistration } from '@shared/api';
import { authModel } from '@features/auth';

export const useRegistrationForm = (emit:any) => {
  const { register } = authModel.useAuth()

  const rememberMe = ref(true)

  const schema = yup.object({
    username: yup.string().required().min(1).label('Username'),
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const submit = async (user: IUserDtoRegistration) => {
    await register(user, rememberMe.value)
    emit('registered')
  };

  return {
    rememberMe,
    submit,
    schema,
  };
}
