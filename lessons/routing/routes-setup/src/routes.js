import Home from './components/home.vue'
import Contact from './components/contact.vue'
import userPage from './components/userPage.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/contacto', component: Contact },
  { path: '/user', component: userPage },
  { path: '*', component: Home }
]
