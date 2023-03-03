import { createStore } from "vuex";
import { counter } from "../modules/counter";
import { textwrite } from "../modules/textwrite";
import { getpost } from "../modules/getpost";

const store = createStore({
  modules: { counter, textwrite, getpost },
});

export default store;
