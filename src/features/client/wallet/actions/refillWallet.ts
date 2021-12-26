import { viewerModel } from '@entities/viewer';
import { bakeryApi, Viewer } from '@shared/api';
import { Loading, QSpinnerBall } from 'quasar';

export const refillWallet = async (value:Partial<Viewer>) => {
  Loading.show({
    message: '...пополнение средств',
    spinner: QSpinnerBall,
  })

  const viewerStore = viewerModel.store()
  const viewer:Viewer = viewerStore.viewer

  if(viewer) {
    try {
      const { viewer: viewerData } = await bakeryApi.users.updateById({
        userId: viewer.id,
        params: value
      })

      if(viewer) {
        setTimeout(() => {
          Loading.show({
          message: 'Средства успешно пополнены!',
          spinner: QSpinnerBall,
          backgroundColor: 'teal',
        })
          setTimeout(() => {
            Loading.hide()
            viewerStore.$patch({ viewer: viewerData })
          }, 1500)
        },1500)
      }

    } catch (error) {
      Loading.show({
        message: 'Ошибка оплаты',
        spinner: QSpinnerBall,
        backgroundColor: 'red'
      })

      setTimeout(() => {
        Loading.hide()
      }, 1500)
    }
  }
}
