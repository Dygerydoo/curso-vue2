import Home from './components/home.vue';
import User from './components/userPage.vue';
import Contact from './components/contact.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/usuario', component: User },
  { path: '/contacto', component: Contact }
];
