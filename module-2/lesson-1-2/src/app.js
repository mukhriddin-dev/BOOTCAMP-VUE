const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vue.js !",
            toggle: false,
            navLinks: [
                {
                    id: 1,
                    title: "Dashboard",
                    href: "/#"
                },
                {
                    id: 2,
                    title: "Pages",
                    href: "/#"
                },
                {
                    id: 3,
                    title: "Users",
                    href: "/#"
                },
                {
                    id: 4,
                    title: "Lists",
                    href: "/#"
                }, {
                    id: 5,
                    title: "Info",
                    href: "/#"
                }, {
                    id: 6,
                    title: "Search",
                    href: "/#"
                },
            ],
            tasks: [],
            x: 0,
            y: 0,
            taskName: "",
            taskDeadline: "",
            users: [
                {
                    id: 1,
                    email: "george.bluth@reqres.in",
                    first_name: "George",
                    last_name: "Bluth",
                    avatar: "https://reqres.in/img/faces/1-image.jpg",
                    isOnline: false
                },
                {
                    id: 2,
                    email: "janet.weaver@reqres.in",
                    first_name: "Janet",
                    last_name: "Weaver",
                    avatar: "https://reqres.in/img/faces/2-image.jpg",
                    isOnline: false
                },
                {
                    id: 3,
                    email: "emma.wong@reqres.in",
                    first_name: "Emma",
                    last_name: "Wong",
                    avatar: "https://reqres.in/img/faces/3-image.jpg",
                    isOnline: true
                },
                {
                    id: 4,
                    email: "eve.holt@reqres.in",
                    first_name: "Eve",
                    last_name: "Holt",
                    avatar: "https://reqres.in/img/faces/4-image.jpg",
                    isOnline: true
                }, {
                    id: 5,
                    email: "charles.morris@reqres.in",
                    first_name: "Charles",
                    last_name: "Morris",
                    avatar: "https://reqres.in/img/faces/5-image.jpg",
                    isOnline: false
                }, {
                    id: 6,
                    email: "tracey.ramos@reqres.in",
                    first_name: "Tracey",
                    last_name: "Ramos",
                    avatar: "https://reqres.in/img/faces/6-image.jpg",
                    isOnline: true
                }, {
                    id: 7,
                    email: "michael.lawson@reqres.in",
                    first_name: "Michael",
                    last_name: "Lawson",
                    avatar: "https://reqres.in/img/faces/7-image.jpg",
                    isOnline: true
                }, {
                    id: 8,
                    email: "lindsay.ferguson@reqres.in",
                    first_name: "Lindsay",
                    last_name: "Ferguson",
                    avatar: "https://reqres.in/img/faces/8-image.jpg",
                    isOnline: false
                }, {
                    id: 9,
                    email: "tobias.funke@reqres.in",
                    first_name: "Tobias",
                    last_name: "Funke",
                    avatar: "https://reqres.in/img/faces/9-image.jpg",
                    isOnline: false
                }, {
                    id: 10,
                    email: "byron.fields@reqres.in",
                    first_name: "Byron",
                    last_name: "Fields",
                    avatar: "https://reqres.in/img/faces/10-image.jpg",
                    isOnline: true
                }, {
                    id: 11,
                    email: "george.edwards@reqres.in",
                    first_name: "George",
                    last_name: "Edwards",
                    avatar: "https://reqres.in/img/faces/11-image.jpg",
                    isOnline: true
                }, {
                    id: 12,
                    email: "rachel.howell@reqres.in",
                    first_name: "Rachel",
                    last_name: "Howell",
                    avatar: "https://reqres.in/img/faces/12-image.jpg",
                    isOnline: false
                },
            ],
            baseURL: "https://jsonplaceholder.typicode.com/posts",
            postList: [],
            loading: false
        };
    },

    computed: {
        filterOnline() {
            return this.users.filter((item) => item.isOnline);
        },
        filterOffline() {
            return this.users.filter((item) => !item.isOnline);
        }
    },

    methods: {
        setToggle() {
            this.toggle = !this.toggle;
            // this.$refs.toggleMenu.classList.toggle("swipe");
            // this.$refs.mainSection.classList.toggle("min-w-full");
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
                isDone: false
            };

            if (newTask.title.trim().length === 0 || newTask.date.trim().length === 0) {
                console.log("Please fill in the task title and date");
            } else {
                this.tasks.push(newTask);
                (this.taskDeadline = ""),
                (this.taskName = "");
            }
        },

        onscrol() {
            window.addEventListener("scroll", () => {})
        }
    },

    mounted() {

        const getPosts = async () => {
            try {
                const posts = await fetch(this.baseURL);
                const result = await posts.json();
                this.postList = result;
                this.loading = true;
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();


    }
});

app.mount("#root");
