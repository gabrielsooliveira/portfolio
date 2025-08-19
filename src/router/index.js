import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectDetailsView from '@/views/ProjectDetailsView.vue';

const routes = [
  {
    path: '/portfolio',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio/project/:id',
    name: 'project-details',
    component: ProjectDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return savedPosition || { top: 0 };
  }
});

export default router;
