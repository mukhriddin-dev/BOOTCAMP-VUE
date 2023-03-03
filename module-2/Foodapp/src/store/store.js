import { createStore } from "vuex";
import increment from "../service/increment";
export const store = createStore({
  mutations: {},
  actions: {},
  getters: {},
  modules: {increment},
});
