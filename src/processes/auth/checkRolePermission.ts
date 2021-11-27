import { viewerModel } from '@entities/viewer';

export const checkRolePermission = ((to:any, from:any, next:any) => {

  const role = viewerModel.store().viewer?.role?.name
  const authorize = to.meta?.authorize
  const homePage = viewerModel.store().homePage

  if (!authorize.includes(role)) next({ name: homePage })
  next()

})
