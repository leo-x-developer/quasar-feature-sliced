import { transformRawDataToViewerData, useApi } from '@shared/api/bakery';
import { Viewer } from '@shared/api';
import { Id } from '@shared/types';

enum BASE_URL {
  users = '/users'
}

type GetAllUsersParams = {
  userIds: Id[];
};
type GetUserByIdParams = {
  userId: Id;
};
type UpdateUserByIdParams = {
  userId: Id;
  params: Partial<Viewer>
};

export const all = async (params?: GetAllUsersParams) => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(BASE_URL.users)

  await get(params)

  return {
    data,
    loading,
    error,
  }
}
export const findById = async ({ userId, ...params }: GetUserByIdParams) => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(`${BASE_URL.users}/${userId}`)

  await get(params)

  return {
    data,
    loading,
    error,
  }
}
export const profile = async () => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(`${BASE_URL.users}/me`)

  await get()
  const viewer = transformRawDataToViewerData(data.value)

  return {
    viewer,
    loading,
    error,
  }
}
export const updateById = async ({ userId, params }: UpdateUserByIdParams) => {
  const {
    data,
    loading,
    error,
    put
  } = useApi(`${BASE_URL.users}/${userId}`)

  await put({...params})
  const viewer = transformRawDataToViewerData(data.value)

  return {
    viewer,
    loading,
    error,
  }
}
