import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('ui/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('ui/pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('ui/pages/ErrorNotFound.vue'),
  },
];

export default routes;
