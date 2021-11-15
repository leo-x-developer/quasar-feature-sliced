import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/shared/layouts/Auth.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/Auth/Login/Index.vue')
      },
      {
        path: 'registration',
        name: 'Registration',
        component: () => import('pages/Auth/Registration/Index.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
