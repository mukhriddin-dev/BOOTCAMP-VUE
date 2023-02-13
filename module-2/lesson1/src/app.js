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
      tasks: [],
      x: 0,
      y: 0,
      taskName: "",
      taskDeadline: "",
    };
  },

  methods: {
    setToggle() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
    mouseMove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      console.log(this.x, this.y);
    },
    addNewTask() {
      const newTask = {
        id: Date.now(),
        title: this.taskName,
        date: this.taskDeadline,
        isDone: false,
      };

      if (
        newTask.title.trim().length === 0 ||
        newTask.date.trim().length === 0
      ) {
        console.log("Please fill in the task title and date");
      } else {
        this.tasks.push(newTask);
        (this.taskDeadline = ""), (this.taskName = "");
      }
    },
  },

  mounted() {
    console.log("hello Vue.js");
  },
});

app.mount("#root");
