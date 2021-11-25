import { createRouter, createWebHashHistory } from 'vue-router';

import recommend from '@/views/recommend.vue';
import singer from '@/views/singer.vue';
import topList from '@/views/top-list.vue'
import search from '@/views/search.vue'



const routes = [
  {
    path: '/',
    redirect:'/recommend'
  },
  {
    path: '/recommend',
    component: recommend,
  },
  {
    path: '/singer',
    component:singer
  },
  {
    path: '/top-list',
    component:topList
  },
  {
    path: '/search',
    component:search
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
