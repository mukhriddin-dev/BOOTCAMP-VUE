const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue.js !",
      toggle: false,
      navLinks: [
        { id: 1, title: "Dashboard", href: "/#" },
        { id: 2, title: "Pages", href: "/#" },
        { id: 3, title: "Users", href: "/#" },
        { id: 4, title: "Lists", href: "/#" },
        { id: 5, title: "Info", href: "/#" },
        { id: 6, title: "Search", href: "/#" },
      ],
    };
  },

  methods: {
    setToggle() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
  },

  mounted() {
    console.log("hello Vue.js");
  },
});

app.mount("#root");
