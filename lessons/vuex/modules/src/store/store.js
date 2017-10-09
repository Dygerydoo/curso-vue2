import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

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
    decrease: state => {
      state.counter--;
    }
  },
  actions: {
    increaseAction: context => {
      context.commit('increase');
    },
    decreaseAction: context => {
      context.commit('decrease');
    },
  },
  modules: {
    counter,
  }
});
