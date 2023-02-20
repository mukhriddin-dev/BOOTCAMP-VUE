<template>
    <header class="shadow fixed top-0 w-full z-20 bg-white">
     <div class="container-fluid">
        <nav class="flex w-full justify-between h-[70px] items-center p-4">

            <a href="#" class="nav__logo text-2xl font-bold text-indigo-600">
                LOGO
            </a>

            <div class="nav__menu flex justify-between w-[220px] items-center cursor-pointer p-2">

                <i @click="toogleBtn" class='bx bx-menu text-3xl text-indigo-600  hover:text-black active:bg-indigo-200 duration-300 rounded-lg '></i>

                <div class="nav__user flex items-center">
                    <span class="text font-semibold text-indigo-800 mr-2">Sardor Uzoqov</span>
                    <i class='bx bxs-user-circle text-2xl text-indigo-500'></i>
                </div>

            </div>

        </nav>
     </div>
    </header>
</template>


<script>

export default {
    name: "Header",
    props: {
        toogleBtn: {
            type: Function,
            required: true
       } 
    }

}

</script>



<style></style>