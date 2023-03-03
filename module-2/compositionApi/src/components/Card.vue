<script setup>
import { defineProps, ref } from "vue";

const { item } = defineProps(["item"]);

const cutText = () => {
    return item.title.substring(0, 18);
};

console.log(cutText());


</script>

<template>
    <div class="card shadow w-25 p-5 m-2">
        <h4 class="text-danger">{{ cutText() }}</h4>
        <p>
            {{ item.body }}
        </p>
    </div>
</template>

<style scoped></style>
