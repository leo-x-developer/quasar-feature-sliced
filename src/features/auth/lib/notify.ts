import { Notify } from 'quasar'
import { viewerModel } from '@entities/viewer'

export const success = (greeting = 'Hello') => {
  const ViewerName = viewerModel.store().viewer?.name

  return Notify.create({
    message: `${greeting}, ${ViewerName}!`,
    color: 'teal',
    position: 'top-right'
  })
}

export const error = (message = 'Hello') => {
  return Notify.create({
    message,
    color: 'negative',
  })
}
