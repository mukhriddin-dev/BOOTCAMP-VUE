<template>
<Header/>
  <main>
    <h2>
      Main
    </h2>
  </main>
<Footer/>
</template>


<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {

  components: {
    Header,
    Footer
  },

  data() {
    return {
      message: "Hello Vue.js"
    }
  }

}

</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: calc(100vh - 70px - 70px);
}
</style>