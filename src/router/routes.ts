import { RouteRecordRaw } from 'vue-router';
import { AuthLayout, ClientLayout, CookLayout } from '@widgets/layouts';
import { ClientHome } from '@pages/Client'
import { CookHome } from '@pages/Cook'
import { Login, Registration } from '@pages/Auth';
import { Roles } from '@shared/api';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ClientLayout,
    meta: { requiresAuth: true, authorize: [Roles.client] },
    children: [
      {
        path: '',
        name: 'ClientHome',
        component: ClientHome,
      },
    ],
  },
  {
    path: '/',
    component: CookLayout,
    meta: { requiresAuth: true, authorize: [Roles.cook] },
    children: [
      {
        path: '',
        name: 'CookHome',
        component: CookHome,
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
