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

import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import { RouterView } from "vue-router"

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
  methods: {},
  computed: {}
}
</script>
<style scoped>
main {
  min-height: calc(100vh - 75px - 70px);
  width: 100%;
}
</style>
