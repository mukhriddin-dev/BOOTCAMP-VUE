export const counter = {
  state: () => ({ num: 0 }),
  mutations: {
    incr(state) {
      state.num++;
    },
  },
  actions: {},
  getters: {},
};
