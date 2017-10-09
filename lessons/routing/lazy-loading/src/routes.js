import Home from './components/Home.vue';
// import User from './components/user/User.vue';
// import UserPage from './components/user/UserPage.vue';
import UserList from './components/user/UserList.vue';
import UserDelete from './components/user/UserDelete.vue';
import Contact from './components/Contact.vue';

const User = resolve => {
  require.ensure(['./components/user/User.vue'], ()=> {
    resolve(require('./components/user/User.vue'));
  }, 'groupuser')
}

const UserPage = resolve => {
  require.ensure(['./components/user/UserPage.vue'], ()=> {
    resolve(require('./components/user/UserPage.vue'));
  }, 'groupuser')
}

export const routes = [
  { path: '/', component: Home },
  { path: '/usuario', component: User, children: [
      { path: '', component: UserList },
      { path: ':userName', component: UserPage },
      { path: ':userName/delete', component: UserDelete, name: 'DeleteUser' },
  ] },
  { path: '/contacto', component: Contact }
];
