import { Loading } from 'quasar';


export const showSpinerOverlay = (loading:boolean) => {
  return loading
    ? Loading.show()
    : Loading.hide()
}

export const hideSpinerOverlay = () => Loading.hide()
