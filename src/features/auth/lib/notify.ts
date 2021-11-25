import { Notify } from 'quasar'

export const success = () => {
  return Notify.create({
    message: 'Authentication was successful!',
    color: 'teal',
    position: 'top-right'
  })
}

export const error = () => {
  return Notify.create({
    message: 'Authentification problem... Сheck your details!',
    color: 'negative',
  })
}
