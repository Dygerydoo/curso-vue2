import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    divideCounter: state => {
      return state.counter / 2;
    },
    evenOrOdd: state => {
      return state.counter % 2 === 0 ? 'par' : 'impar';
    }
  },
  mutations: {
    increase: state => {
      state.counter++;
    },
    // increase: (state, payload) => {
    //   state.counter += payload;
    // },
    decrease: state => {
      state.counter--;
    }
  }
});
