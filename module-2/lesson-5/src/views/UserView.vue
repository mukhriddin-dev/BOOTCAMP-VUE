<template>
    <div class="bg-orange-500 p-20">
        <h1 class="text-white">User list</h1>
        <h1 class="text-3xl">
            NAME: {{ xabar2 }}
            <Extra :xabar3="xabar2" />
        </h1>
    </div>
</template>
<script>
import Extra from './Extra.vue';


export default {
    name: "UserView",
    props: {
    xabar2:String   
    },
    components: { Extra }
}
</script>
<style lang="scss"></style>