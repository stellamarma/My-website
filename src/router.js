import { createRouter, createWebHistory } from 'vue-router';

// Εισαγωγή όλων των components
import Aboutme from './components/Aboutme.vue'
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Languages from './components/Languages.vue';
import Contact from './components/Contact.vue';

const routes = [
  { path: '/', redirect: '/aboutme' }, // Η αρχική σελίδα να μεταβαίνει στο Aboutme
  { path: '/#aboutme', name: 'Aboutme', component: Aboutme },
  { path: '/#skills', name: 'Skills', component: Skills },
  { path: '/#projects', name: 'Projects', component: Projects },
  { path: '/#education', name: 'Education', component: Education },
  { path: '/#languages', name: 'Languages', component: Languages },
  { path: '/#contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
