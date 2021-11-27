import { useRouter } from 'vue-router';
import { viewerModel } from '@entities/viewer';

export const useAuthPages = () => {
  const router = useRouter();
  const viewerHomePage = viewerModel.store().homePage

  const goToViewerHome = async () => await router.push({ name: viewerHomePage })

  return {
    goToViewerHome
  }
}
