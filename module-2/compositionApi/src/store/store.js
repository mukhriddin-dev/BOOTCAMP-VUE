import {createStore} from "vuex";
import getpost from "@/modules/posts/getpost";
import postItem from "@/modules/posts/viewpost";
import postupdate from "@/modules/posts/updatepost";
import uploadpost from '@/modules/posts/uploadpost';

const store = createStore({
    modules: {
        getpost,
        postItem,
        postupdate,
        uploadpost
    }
});

export default store;
