const state = {
  number: 0,
};

const mutations = {
  decrement(state) {
    state.number -= 1;
  },
};

export default { state, mutations };
