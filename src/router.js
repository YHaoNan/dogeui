import { createRouter, createWebHashHistory } from 'vue-router'
import ButtonExample from './components/examples/ButtonExample.vue'

const routes = [
  {path: '/', redirect: '/button'},
  {path: '/button', component: ButtonExample}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;