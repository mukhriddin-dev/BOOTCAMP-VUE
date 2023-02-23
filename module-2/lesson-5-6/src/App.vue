<template>
  <Header />
  <main>
    <section class="main">
      <RouterView />
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { RouterView } from "vue-router";


export default {
  name: "App",
  data() {
    return {
      userlist: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      message: "Welcome to Vue.js"
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {},
  computed: {},
  mounted() { },
};
</script>
<style scoped>
main {
  min-height: calc(100vh - 75px - 70px);
  width: 100%;
}
</style>
