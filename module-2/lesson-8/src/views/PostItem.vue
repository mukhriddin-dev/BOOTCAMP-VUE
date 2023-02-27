<template >
    <div class="w-full border p-5 shadow my-5">
        <button @click="$event => $router.back()"
            class="bg-cyan-500 px-3 py-2 rounded-lg text-white font-bold focus:ring-2 focus:ring-cyan-600"> GO
            BACK</button>
    </div>

    <div class="p-5 w-full shadow m-4 mx-auto border">

        <div v-if="isLoad">
            <h1 class="px-5 font-semibold"> {{ $route.params.id }} {{ post.title }}</h1>
            <p class="px-5 my-3">
                {{ post.body }}
            </p>
        </div>
        
        <div v-else="isLoad">
            <span class="loader"></span>
        </div>

    </div>
</template>

<script>
import axios from "@/service/axios";
export default {
    name: "postitem",
    data() {
        return {
            post: [],
            isLoad: false,
        }
    },

    methods: {
        async getPostItem() {
            try {
                const postItem = await axios.get(`/posts/${this.$route.params.id}`)
                if (postItem.status === 200) {
                    this.post = postItem.data;
                    this.isLoad = true;
                }
            } catch (e) {
                console.log(e)
            }
        },
        getId() {
            console.log(this.$route)
        },

        // goBack() {
        //     this.$router.back()
        // }
    },

    mounted() {
        this.getId()
        this.getPostItem()
    },
}
</script>
<style lang="css">
.loader {
    width: 360px;
    height: 100px;
    display: block;
    position: relative;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes animloader {
    0% {
        background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    }

    100% {
        background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
    }
}
</style>