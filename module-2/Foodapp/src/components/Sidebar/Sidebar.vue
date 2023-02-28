<template>
    <aside class="pl-[13px] bg-[#1F1D2B] w-[105px] h-screen">

        <RouterLink class="w-[92px] h-[80px]  flex justify-center items-center" to="/">
            <i
                class="bx bxs-store-alt rounded-lg  text-[24px] w-[56px] h-[56px] bg-[rgba(235,149,106,0.2)] text-[#EA7C69] flex justify-center items-center"></i>
        </RouterLink>

        <ul>
            <li v-for="item in navlink">
                <RouterLink class="w-[92px]  h-[80px]  flex justify-center items-center" :to="item.path">
                    <i
                        :class="`bx ${item.icon} rounded-lg  text-[24px] w-[56px] h-[56px] text-[#EA7C69] flex justify-center items-center`"></i>
                </RouterLink>
            </li>
        </ul>

    </aside>
</template>
<script>
import { navlink } from "@/constants/navlinks"
export default {
    name: "Sidebar",
    data() {
        return {
            navlink: navlink
        }
    }
}
</script>
<style lang="css">
.router-link-active {
    background-color: #252836 !important;
    border-radius: 12px 0 0 12px;
    position: relative;

}

.router-link-active::after {
    display: block;
    content: "";
    clip-path: polygon(79% 56%, 93% 25%, 100% 0, 100% 100%, 0 100%, 40% 87%, 63% 74%);
    background-color: #252836;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translateY(-100%)
}

.router-link-active::before {
    display: block;
    content: "";
    clip-path: polygon(79% 56%, 93% 25%, 100% 0, 100% 100%, 0 100%, 40% 87%, 63% 74%);
    background-color: #252836;
    width: 12px;
    height: 12px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    transform: translateY(100%) rotate(-90deg);
}

.router-link-active i {
    color: #fff !important;
    background-color: #EA7C69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
    border-radius: 8px;
}
</style>