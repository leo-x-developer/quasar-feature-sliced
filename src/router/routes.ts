import { RouteRecordRaw } from 'vue-router';
import { AuthLayout } from '@layouts/AuthLayout';
import { ViewerLayout } from '@layouts/ViewerLayout';
import { ClientHome } from '@pages/Client'
import { CookHome } from '@pages/Cook'
import { Login, Registration } from '@pages/Auth';
import { Roles } from '@shared/api';
import { Profile } from '@pages/Profile';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewerLayout,
    meta: { requiresAuth: true, authorize: [Roles.client, Roles.cook] },
    children: [
      {
        path: '',
        name: 'ClientHome',
        component: ClientHome,
        meta: { requiresAuth: true, authorize: [Roles.client] },
      },
      {
        path: '',
        name: 'CookHome',
        component: CookHome,
        meta: { requiresAuth: true, authorize: [Roles.cook] },
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
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
