<template>
    <header class="bg-green-600">
        <div class="container mx-auto">
            <nav class="flex w-full justify-between nav h-[75px] items-center">
                <a href="/" class="text-white font-bold nav-logo uppercase text-2xl ">VUE.APP</a>

                <ul class="nav__list flex min-w-[10%] justify-between uppercase">

                    <li class="nav__list--item">
                        <RouterLink class="nav__list--item-link text-white p-3" to="/">Home</RouterLink>
                    </li>

                    <li class="nav__list--item">
                        <RouterLink class="nav__list--item-link text-white p-3" to="/userlist">User list</RouterLink>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
</template>
<script>

import { RouterLink } from 'vue-router';

export default {
    name: "Header"
}
</script>
<style scoped>
.router-active-link {
    padding: 10px;
}
</style>