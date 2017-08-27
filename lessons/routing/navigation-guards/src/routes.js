import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserPage from './components/user/UserPage.vue';
import UserList from './components/user/UserList.vue';
import UserDelete from './components/user/UserDelete.vue';
import Contact from './components/Contact.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/usuario', component: User, children: [
      { path: '', component: UserList },
      { path: ':userName', component: UserPage },
      { path: ':userName/delete', component: UserDelete, name: 'DeleteUser' },
  ] },
  { path: '/contacto', component: Contact, beforeEnter: (to, from, next) => {
    next();
  } }
];
