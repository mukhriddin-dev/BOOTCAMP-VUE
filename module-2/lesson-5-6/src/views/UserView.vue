<template>
    <div class="bg-white pt-5 w-1/2 mx-auto min-h-[300px] shadow-lg px-10 container">
        <!-- modal  -->
        <Modal :isOpen="isOpen" @hide="hideModal" :username="username" :useremail="useremail" @edit="updatePost" />
        <!-- modal  -->

        <h1 class="text-rgb(25, 235, 25)-700 text-center text-2xl uppercase font-semibold">
            User list
        </h1>

        <table class="list bg-rgb(25, 235, 25)-50 table-auto w-full border-separate border-spacing-2">
            <thead class="p-5 bg-rgb(25, 235, 25)-300 rounded-xl w-full">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <h1 class="text-center" v-if="!userList.length">USER LIST EMPTY</h1>

            <span class="loader" v-if="isLoading"></span>

            <tbody class="w-full">

                <ListItem v-if="!isLoading" v-for="(item, dataUser) in userList" :key="item.id" :num="index" :item="item"
                    :removeUser="removeUser" @open="isOpenTrue" />
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "@/service/axios";
import ListItem from "@/ui/ListItem.vue";
import Modal from "@/components/Modal/Modal.vue";
import { toast } from "vue3-toastify";

export default {
    name: "UserView",
    components: { ListItem, Modal },
    data() {
        return {
            userList: [],
            isLoading: true,
            isOpen: false,
            editId: "",
            username: "",
            useremail: "",
        };
    },
    methods: {
        async getAlluser() {
            try {
                const user = await axios.get("/user");
                console.log(user);
                if (user.status === 200) {
                    this.userList = user.data;
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 300);
                }
            } catch (e) {
                console.log(e);
            }
        },

        removeUser(id) {
            axios.delete(`/user/${id}`, {});
            toast.info("User removed successfully")
            setTimeout(() => {
                // location.reload();
            }, 1300)
        },

        async isOpenTrue(id) {
            this.isOpen = true;
            this.editId = id;

            try {
                const postItem = await axios.get(`/user/${this.editId}`);
                console.log(postItem.data)
                const { name, email } = postItem.data;
                this.username = name
                this.useremail = email
            } catch (e) {
                console.log(e)
            }
        },

        hideModal() {
            this.isOpen = false;
        },

        updatePost(data) {

            axios.put(`/user/${this.editId}`, data)

            toast.success('Updated post successfully')
            setTimeout(() => {
                location.reload()
            }, 1000)
        }

    },
    mounted() {
        this.getAlluser();
    },
    computed: {

        dataUser(){
            return this.getAlluser();
        }
    },

    updated() {
        console.log("updated");
    },
};
</script>
<style scoped>
.loader {
    position: relative;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgb(25, 235, 25) 50px, transparent 0),
        linear-gradient(rgb(25, 235, 25) 50px, transparent 0),
        linear-gradient(rgb(25, 235, 25) 50px, transparent 0),
        linear-gradient(rgb(25, 235, 25) 50px, transparent 0),
        linear-gradient(rgb(25, 235, 25) 50px, transparent 0),
        linear-gradient(rgb(25, 235, 25) 50px, transparent 0);
    background-position: 0px center, 15px center, 30px center, 45px center,
        60px center, 75px center, 90px center;
    animation: rikSpikeRoll 0.65s linear infinite alternate;
    display: block;
}

@keyframes rikSpikeRoll {
    0% {
        background-size: 10px 3px;
    }

    16% {
        background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px;
    }

    33% {
        background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px,
            10px 3px;
    }

    50% {
        background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px,
            10px 3px;
    }

    66% {
        background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px,
            10px 3px;
    }

    83% {
        background-size: 10px 3px, 10px 3px, 10px 10px, 10px 30px, 10px 50px,
            10px 3px;
    }

    100% {
        background-size: 10px 3px, 10px 3px, 10px 3px, 10px 10px, 10px 30px,
            10px 50px;
    }
}
</style>
