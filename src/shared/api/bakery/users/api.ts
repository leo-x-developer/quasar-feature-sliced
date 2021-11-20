import { useApi } from '@shared/api/bakery';

enum BASE_URL {
  users = '/users'
}

type GetAllUsersParams = {
  userIds: number[];
};

type GetUserByIdParams = {
  userId: number;
};


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
