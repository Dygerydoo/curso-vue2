import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters,
  mutations,
  actions
  // getters: {
  //   divideCounter: state => {
  //     return state.counter / 2;
  //   },
  //   evenOrOdd: state => {
  //     return state.counter % 2 === 0 ? 'par' : 'impar';
  //   }
  // },
  // mutations: {
  //   increase: state => {
  //     state.counter++;
  //   },
  //   // increase: (state, payload) => {
  //   //   state.counter += payload;
  //   // },
  //   decrease: state => {
  //     state.counter--;
  //   }
  // },
  // actions: {
  //   increaseAction: context => {
  //     context.commit('increase');
  //   },
  //   decreaseAction: context => {
  //     context.commit('decrease');
  //   },
  //   // Destructured example
  //   // increase: ({ commit }) => {
  //   //   commit('increase');
  //   // }

  //   // Async example
  //   // delayedIncrease: ({ commit }) => {
  //   //   setTimeOut(() => {
  //   //     commit('increase');
  //   //   }, 2000);
  //   // }

  //   // Destructured payload example
  //   // increase: ({ commit }, payload) => {
  //   //   commit('increase', payload);
  //   // }
  // }
});
