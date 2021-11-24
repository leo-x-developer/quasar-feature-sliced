import * as yup from 'yup';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { UserDtoRegistration } from '@shared/api';
import { authModel } from '@features/auth';

export const useRegistrationForm = () => {
  const router = useRouter();
  const { register } = authModel.useAuth()

  const rememberMe = ref(true)

  const schema = yup.object({
    username: yup.string().required().min(1).label('Username'),
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const submit = async (user: UserDtoRegistration) => {
    await register(user, rememberMe.value)
    router.go(0)
  };

  return {
    rememberMe,
    submit,
    schema,
  };
}
