import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Experiments from '../views/Experiments.vue';
import Animation from '../views/Animation.vue';
import Experiments2 from '../views/Experiments2.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/experiments', component: Experiments},
  { path: '/experiments2', component: Experiments2},
  { path: '/animation', component: Animation},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;