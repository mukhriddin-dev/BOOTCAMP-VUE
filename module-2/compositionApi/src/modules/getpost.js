import axios from "../service/axios";

export const getpost = {
  state: () => ({
    posts: [],
    isLoading: false,
    errorMessage: "",
  }),

  mutations: {
    getposts() {
      console.log("getpost");
      return fetch("https://jsonplaceholder.typicode.com/posts");
    },
    setLoad(state) {
      console.log("loading . . .");
      state.isLoading = true;
    },
    errorHandler(state, payload) {
      console.log("errorrhandler . . .");
      state.errorMessage = payload;
    },
  },

  //   actions: {
  //     postLoad({ commit, state }) {
  //       console.log(state);
  //       commit("getposts")
  //         .then((res) => {
  //           console.log(res);
  //           commit("setLoad");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           commit("errorHandler", err);
  //         });
  //     },
  //   },

  //     actions: {
  //         async postLoad({ commit, state }) {

  //         }
  //   }
};
