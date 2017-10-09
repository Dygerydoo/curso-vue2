export const divideCounter = state => {
  return state.counter / 2;
};
export const evenOrOdd = state => {
  return state.counter % 2 === 0 ? 'par' : 'impar';
};
