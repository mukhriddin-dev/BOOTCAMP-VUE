import axios from "../../service/axios";

const postItem = {
  state: () => ({ postItem: null, isloading: true, errormessage: "" }),

  mutations: {
    GET_POST_ITEM(state, data) {
      state.postItem = data;
    },
    SET_LAODING(state, status) {
      state.isloading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async fetchPostItem({ commit }, ID) {
      try {
        const post = await axios.get(`/posts/${ID}`);
        commit("GET_POST_ITEM", post.data);
        commit("SET_LAODING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERRORMESSAGE", err);
      }
    },
  },
};

export default postItem;
