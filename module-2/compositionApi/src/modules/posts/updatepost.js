import axios from "../../service/axios";

const updatepost = {
  state: () => ({ status: null, isloading: true, errormessage: "" }),

  mutations: {
    UPDATE_POST(state, data) {
      state.status = data;
    },
    SET_LAODING(state, status) {
      state.isloading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async updatePost({ commit }, { id, data }) {
      try {
        const post = await axios.put(`/posts/${id}`, data);
        commit("UPDATE_POST", post.data);
        commit("SET_LAODING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERRORMESSAGE", err);
      }
    },
  },
};

export default updatepost;
