<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";

const state = useStore().state;
const store = useStore();

let title = ref("");
let body = ref("");


onMounted(() => {
  store.dispatch("fetchPosts");
});

onUpdated(() => {
  console.log("update");
  
});

function submitForm() {

  const postItem = {
    id: Date.now(),
    title: title.value,
    body: body.value,
  };


  // store.dispatch("updatePost", {id:1, data: postItem} ); // update
  store.dispatch("uploadPost", { data: postItem });
  title.value = ""
  body.value = ""

}

</script>

<template>
  <div class="container">
    <div class="p-5 bg-white w-75 shadow">

      <h1 class="text-center"></h1>



      <button class="btn btn-success mx-1" @click="store.dispatch('fetchPostItem', 4)">
        POST ITEM
      </button>

      <form action="#" class="my-4" @submit.prevent>

        <input type="text" class="form-control p-3 my-3" placeholder="enter post title" v-model="title" />
        <input type="text" class="form-control p-3 my-3" placeholder="enter post body text" v-model="body" />

        <button type="submit" class="btn btn-primary my-3" @click="submitForm">
          POST
        </button>

      </form>
    </div>

    <div class="p-5 bg-white w-75 shadow my-3">
      <h1 class="text-center text-success" v-if="state.getpost.isloading">
        LOADING . . .
      </h1>

      <h1 class="text-center text-danger" v-if="state.getpost.errormessage">
        404 NOT FOUND
      </h1>

      <ul class="p-2 list-unstyled">
        <li class="p-3 shadow bg-white w-100 my-3" v-for="(item, index) in state.getpost.posts">
          <strong>{{ index + 1 }}</strong>
          <h5>{{ item.title }}</h5>
          <p class="text-success">{{ item.body }}</p>
          <button class="btn btn-success mx-1" @click="store.dispatch('fetchPostItem', item.id)">
            POST ITEM
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
