import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // if(savedPosition) {
    //   console.log(savedPosition);
    //   return savedPosition;
    // } else {
    //   return { x: 0, y: 100 };
    // }
    if(to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 100 };
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
