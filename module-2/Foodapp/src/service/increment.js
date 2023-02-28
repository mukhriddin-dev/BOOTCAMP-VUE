const state = {
  number: 0,
};

const mutations = {
  increment(state) {
    state.number += 1;
  },
  decrement(state) {
    state.number -= 1;
  },
};

export default { state, mutations };
