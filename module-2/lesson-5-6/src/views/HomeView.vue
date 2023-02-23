<template>
  <div class="container mx-auto p-28 flex justify-center items-center">
    <form action="#" class="shadow-lg p-12 w-2/3" @submit="adduser">
      <Input labelId="username" inputType="text" placeholder="Enter username" :value="name"
        @input="($event) => (name = $event.target.value)" />

      <Input labelId="email" inputType="text" placeholder="Enter user email" :value="email" @input="emailHandler" />
      <Button btnType="submit" textContent="ADD NEW USER" class="bg-cyan-500 text-white mx-auto block w-1/2" />
    </form>
  </div>
</template>

<script>
import UserView from "./UserView.vue";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "@/service/axios";
import { toast } from "vue3-toastify";

export default {
  name: "HomeView",
  components: {
    UserView,
    Input,
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },

  methods: {

    adduser(e) {
      e.preventDefault();

      const newUser = {
        id: uuidv4(),
        name: this.name,
        email: this.email,
      };

      if (newUser.name.length === 0 || newUser.email.length === 0) {
        toast.error("Please enter a new user name and email", {
          autoClose: 1000,
          theme: "auto",
          position: "bottom-right",
        });
      } else {
        axios.post("/user", newUser);
        toast.success("User added successfully", {
          autoClose: 1000,
          theme: "auto",
          position: "bottom-right",
        });

        this.name = ""
        this.email = ""

      }


    },

    emailHandler(e) {
      this.email = e.target.value;
    },
  },
};
</script>
<style lang="scss"></style>
