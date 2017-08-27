import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    divideCounter: state => {
      let result = state.counter;
      result = result * 3;
      result = result + 7;
      result = result - 1;
      return result / 2;
    }
  }
});
