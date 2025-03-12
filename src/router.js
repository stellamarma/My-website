import { createRouter, createWebHistory } from 'vue-router';
import Aboutme from './components/Aboutme.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Languages from './components/Languages.vue';
import Contact from './components/Contact.vue';

const routes = [
  { path: '/', component: Aboutme }, // Το default page μπορεί να είναι Aboutme
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
