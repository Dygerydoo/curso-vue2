const state = {
  counter: 0,
};

const getters = {
  divideCounter: state => {
    return state.counter / 2;
  },
  evenOrOdd: state => {
    return state.counter % 2 === 0 ? 'par' : 'impar';
  }
};

const mutations = {
  increase: state => {
    state.counter++;
  },
  decrease: state => {
    state.counter--;
  }
};

const actions = {
  increaseAction: context => {
    context.commit('increase');
  },
  decreaseAction: context => {
    context.commit('decrease');
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}

