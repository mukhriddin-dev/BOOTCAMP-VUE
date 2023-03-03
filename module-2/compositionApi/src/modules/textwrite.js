export const textwrite = {
  state: () => ({
    text: "",
  }),

  mutations: {
    textwrite(state, payload) {
      console.log(payload);
      state.text = payload;
    },
  },
  actions: {},
};
