import { RouteRecordRaw } from 'vue-router';
import { AuthLayout, ViewerLayout } from '@shared/layouts';
import { ClientHome } from '@pages/Client'
import { CookHome } from '@pages/Cook'
import { Login, Registration } from '@pages/Auth';
import { Roles } from '@shared/api';
import { checkRolePermission } from '@processes/auth/checkRolePermission';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewerLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'ClientHome',
        component: ClientHome,
        meta: { authorize: [Roles.client] },
        beforeEnter: checkRolePermission
      },
      {
        path: '',
        name: 'CookHome',
        component: CookHome,
        meta: { authorize: [Roles.cook] },
        beforeEnter: checkRolePermission
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
