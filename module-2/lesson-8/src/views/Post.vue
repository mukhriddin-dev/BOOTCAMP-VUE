<template>
    <div>
        <h1 class="text-center m-5 font-bold uppercase text-2xl">Post</h1>

        <ul class="shadow-lg w-2/3 mx-auto p-5 border" v-if="isLoading">
            <li v-for="(item) in post" >
            <RouterLink class="shadow p-4 my-1 border block" :to="`/post/${item.id}`"> {{ item.id }} {{ item.title }}</RouterLink>
            </li>
        </ul>

        <h1 v-else="isLoading">
        <img src="http://dms.uz/themes/dms/assets/img/preloader.gif" alt="loader">
        </h1>

    </div>
</template> 
<script>
import axios from "@/service/axios";
import {RouterLink} from "vue-router";
export default {
    name: "post",
    data() {
        return {
            post: [],
            isLoading: false,
        };
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get("/posts");
                if (response.status === 200) {
                    console.log(response.data);
                    this.post = response.data;
                    this.isLoading = true;
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>
<style lang="css"></style>
