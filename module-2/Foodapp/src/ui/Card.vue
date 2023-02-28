<template>
    <div class="w-[300px] h-[430px] shadow-xl m-5 p-4 bg-white">
        <h1>Crad</h1>
        <h1>{{ $store.state.increment.number }}</h1>

        <button @click="$store.commit('increment');" class="px-3 py-2 bg-sky-500 focus:ring-2 focus:ring-sky-700">
            INCREMENT
        </button>
        <button @click="$store.commit('decrement');" class="px-3 py-2 bg-red-500 focus:ring-2 focus:ring-sky-700">
            DECREMENT
        </button>
    </div>
</template>
<script>
export default {
    name: "Card",
    methods: {
        incr() {
            // this.$store.commit('increment');
        }
    }
}
</script>
<style lang="css"></style>