<template>
  <div class="bg-red-500 p-20">
    <h1 class="text-white">Home</h1>
    <h1 class="text-3xl">
      NAME: {{ newMessage}}
      <UserView :xabar2="xabar"/>
    </h1>
  </div>
</template>
<script>

import UserView from './UserView.vue';

export default {
  
  name: 'HomeView',
  components: {
    UserView
  },
  props: {
    xabar: String,
  },
  data() {
    return {
        newMessage: this.xabar
    }
  }

}
</script>
<style lang="scss"></style>