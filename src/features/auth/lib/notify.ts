import { Notify } from 'quasar'

export const authSuccessNotification = () => {
  return Notify.create({
    message: 'Authentication was successful!',
    color: 'teal',
  })
}

export const authErrorNotification = () => {
  return Notify.create({
    message: 'Authentification proble... Сheck your details!',
    color: 'negative',
  })
}
