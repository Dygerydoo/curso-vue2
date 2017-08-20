import Vue from 'vue'
import App from './App.vue'

Vue.directive('rotate', {
  bind(el, binding, vnode) {
    el.style.transform = "rotate(6deg)";

    if(binding.value) {
      el.style.transform = `rotate(${binding.value}deg)`;
    }

    if(binding.arg === 'big') {
      el.style.transform = 'scale(2)';
    } else if(binding.arg === 'small') {
      el.style.transform = 'scale(.6)';
    }

    if(binding.modifiers) {
      el.style.backgroundColor = Object.keys(binding.modifiers)[0];
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
