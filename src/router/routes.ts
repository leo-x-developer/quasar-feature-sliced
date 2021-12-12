import { RouteRecordRaw } from 'vue-router';
import { LoginPage, RegistrationPage } from '@pages/Auth';
import { AuthLayout, ViewerLayout } from 'src/layouts';
import { ClientHomePage } from '@pages/Client'
import { CookHomePage } from '@pages/Cook'
import { Profile, Error404, ProductPage } from 'src/pages';
import { Order, Checkout, Cart, Result  } from '@pages/Order'
import { Roles } from '@shared/api';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewerLayout,
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
      {
        path: 'product/:id',
        name: 'ProductPage',
        component: ProductPage,
        props: true,
      },
      {
        path: 'order',
        component: Order,
        meta: { requiresAuth: true, authorize: [Roles.client] },
        children: [
          {
            path: '',
            name: 'Cart',
            component: Cart,
          },
          {
            path: 'checkout',
            name: 'Checkout',
            component: Checkout,
          },
          {
            path: 'result',
            name: 'Result',
            component: Result,
          },
        ]
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
