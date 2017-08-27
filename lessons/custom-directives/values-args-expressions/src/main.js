import Vue from 'vue'
import App from './App.vue'

Vue.directive('rotate', {
  bind(el, binding, vnode) {
    el.style.transform = "rotate(6deg)";
    el.style.display = binding.value.display;

    if(binding.value) {
      el.style.transform = `rotate(${binding.value}deg)`;
    }

    if(binding.arg === 'big') {
      el.style.transform = `scale(3)`;
    } else if(binding.arg === 'small') {
      el.style.transform = `scale(.8)`;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
