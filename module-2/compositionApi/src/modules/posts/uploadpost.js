import axios from "../../service/axios";


const uploadpost = {

    state: () => (
        {status: null, isloading: true, errormessage: ""}
    ),

    mutations: {
        UPLOAD_POST(state, data) {
            state.status = data;
        },
        SET_LAODING(state, status) {
            state.isloading = status
        },
        SET_ERRORMESSAGE(state, message) {
            state.errormessage = message;
        }
    },

    actions: {
        async uploadPost({
            commit
        }, {data}) {

            try {
                const post = await axios.post(`/posts`, data);
                commit("UPLOAD_POST", post.data);
                commit("SET_LAODING", false);
            } catch (err) {
                console.log(err);
                commit("SET_ERRORMESSAGE", err);
            }
        }
    }
};

export default uploadpost;
