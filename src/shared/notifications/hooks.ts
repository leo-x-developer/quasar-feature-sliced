import { Notify } from 'quasar'

export const success = (message: string) => {
  return Notify.create({
    message,
    color: 'teal',
    position: 'bottom-right'
  })
}
