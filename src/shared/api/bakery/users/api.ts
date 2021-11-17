import { useApi } from '@src/shared/api/bakery';
import { Token } from '@src/shared/types';

enum BASE_URL {
  users = '/users',
  user = '/user'
}

type GetAllUsersParams = {
  userIds: number[];
};

type GetUserByIdParams = {
  userId: number;
};


export const user = async (token:Token) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    get
  } = useApi(BASE_URL.user)

  await get({token})

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }

}
export const getAllUsers = async (params?: GetAllUsersParams) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    get
  } = useApi(BASE_URL.users)

  await get(params)

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }
}
export const getUserById = async ({ userId, ...params }: GetUserByIdParams) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    get
  } = useApi(`${BASE_URL.users}/${userId}`)

  await get(params)

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }
}
