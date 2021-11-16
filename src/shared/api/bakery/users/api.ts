import { useApi } from '@src/shared/api/bakery';

const BASE_URL = '/users';

export type GetAllUsersParams = {
  userIds: number[];
};

export type GetUserByIdParams = {
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
  } = useApi(BASE_URL)

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
  } = useApi(`${BASE_URL}/${userId}`)

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
