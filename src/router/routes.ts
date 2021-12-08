import { RouteRecordRaw } from 'vue-router';
import { LoginPage, RegistrationPage } from '@pages/Auth';
import { AuthLayout, ViewerLayout } from 'src/layouts';
import { ClientHomePage } from '@pages/Client'
import { CookHomePage } from '@pages/Cook'
import { Profile, Error404 } from 'src/pages';
import { Roles } from '@shared/api';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewerLayout,
    meta: { requiresAuth: true, authorize: [Roles.client, Roles.cook] },
    children: [
      {
        path: '',
        name: 'ClientHomePage',
        component: ClientHomePage,
        meta: { requiresAuth: true, authorize: [Roles.client] },
      },
      {
        path: '',
        name: 'CookHomePage',
        component: CookHomePage,
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
        component: LoginPage
      },
      {
        path: 'registration',
        name: 'Registration',
        component: RegistrationPage
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: Error404,
  },
];

export default routes;
