import * as yup from 'yup';
import { bakeryApi, UserDto } from '@src/shared/api';
import { useAuth } from '@src/features/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export const useLoginForm = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().required().email().label('Email address'),
    password: yup.string().required().min(6).label('Password'),
  });

  const rememberMe = ref(true)

  const submit = async (payload: UserDto, actions: { resetForm: () => void; }) => {
    const { setUser } = useAuth()
    const { data } = await bakeryApi.auth.login(payload)

    setUser(data.value, rememberMe.value)
    await router.push({name: 'ViewerHome'})

    actions.resetForm();
  };

  return {
    submit,
    schema,
  };
}
