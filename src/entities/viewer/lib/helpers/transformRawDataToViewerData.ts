import { IUserRawData } from '@shared/api';

export const transformRawDataToViewerData = (data: IUserRawData) =>  {
  if(!data) return null

  return {
    ...data,
    name: data.username
  }
}

