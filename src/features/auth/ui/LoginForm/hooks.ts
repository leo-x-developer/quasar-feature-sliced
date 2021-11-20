import * as yup from 'yup';
import { bakeryApi, UserDto } from '@shared/api';
import { authModel } from '@features/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export const useLoginForm = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
  });

  const rememberMe = ref(true)

  const submit = async (payload: UserDto) => {
    const { setViewer } = authModel.useAuth()
    const { data } = await bakeryApi.auth.login(payload)

    setViewer(data.value, rememberMe.value)
    await router.push({name: 'ViewerHome'})
  };

  return {
    submit,
    schema,
  };
}
