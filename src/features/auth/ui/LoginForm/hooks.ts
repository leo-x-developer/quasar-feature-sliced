import * as yup from 'yup';
import { ref } from 'vue';
import { IUserDtoLogin } from '@shared/api';
import { authModel } from '@features/auth';

export const useLoginForm = (emit:any) => {
  const { login } = authModel.useAuth()

  const schema = yup.object({
    identifier: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
  });

  const rememberMe = ref(true)

  const submit = async (dto: IUserDtoLogin) => {
    await login(dto, rememberMe.value)
    emit('login')
  };

  return {
    submit,
    schema,
  };
}
