import { RouteRecordRaw } from 'vue-router';
import { AuthLayout, ViewerLayout } from '@shared/layouts';

import { ViewerHome } from '@pages/Viewer'
import { Login, Registration } from '@pages/Auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewerLayout,
    children: [
      {
        path: '',
        name: 'ViewerHome',
        component: ViewerHome,
        meta: { requiresAuth: true }
      },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'registration',
        name: 'Registration',
        component: Registration
      }
    ],
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@pages/Error404.vue'),
  },
];

export default routes;
