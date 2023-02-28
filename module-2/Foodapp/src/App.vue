<template>
  <div class="flex w-full">
   <Sidebar/> <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar/Sidebar.vue';
export default {
    name: "App",
    components: { Sidebar }
}
</script>


<style lang="css"></style>