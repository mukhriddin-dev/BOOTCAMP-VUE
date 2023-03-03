import axios from "../../service/axios";

const getpost = {

    state: () => (
        {posts: [], isloading: true, errormessage: ""}
    ),

    mutations: {
        GET_POSTS(state, data) {
            state.posts = data;
        },
        SET_LAODING(state, status) {
            state.isloading = status
        },
        SET_ERRORMESSAGE(state, message) {
            state.errormessage = message;
        }
    },


    actions: {
        async fetchPosts({commit}) {
            try {
                const post = await axios.get("/posts");
                commit("GET_POSTS", post.data);
                commit("SET_LAODING", false);
            } catch (err) {
                console.log(err);
                commit("SET_ERRORMESSAGE", err);
            }
        }
    }
};

export default getpost;
