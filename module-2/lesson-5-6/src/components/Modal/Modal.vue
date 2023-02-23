<template>
    <!-- modal started -->
    <div v-if="isOpen" class="modal-window    left-0 bg-[#00000081] w-full min-h-screen fixed top-0 z-10 backdrop-blur-sm">
        <div
            class="modal-content duration-200 max-w-[800px] min-h-[580px] bg-white mx-auto mt-40 rounded-2xl overflow-hidden shadow-md shadow-slate-900">
            <div class="modal-header bg-slate-200 text-slate-800 p-4 text-center">
                <h2 class="font-bold text-2xl uppercase text-slate-800">
                    Registration form:
                </h2>
            </div>

            <div class="modal-body bg-white min-h-[440px] flex justify-center items-center">
                <form action="#" class="min-w-[80%] p-3 rounded-md text-center">
                    <label for="fullname" class="w-full">
                        <p class="mb-2 text-left ml-16 mt-2">
                            Enter fullname <span class="text-red-600">*</span>
                        </p>
                        <input type="text"
                            class="form-control w-[80%] mx-auto p-3 rounded-md mb-4 focus:ring-4 focus:ring-sky-400 focus:outline-none border"
                            id="fullname1" placeholder="enter fullname" />
                    </label>

                    <label for="tel">
                        <p class="mb-2 text-left ml-16">
                            Enter email <span class="text-red-600">*</span>
                        </p>
                        <input type="email" placeholder="enter email address"
                            class="form-control w-[80%] mx-auto p-3 rounded-md mb-4 focus:ring-4 focus:ring-sky-400 focus:outline-none border"
                            id="tel" />
                    </label>


                    <button
                        class="btn block mx-auto w-[80%] my-4 bg-green-500 px-4 py-2 rounded-lg m-3 text-white font-bold hover:bg-green-700 focus:ring-4 focus:ring-green-400 duration-200">
                        SAVE
                    </button>
                </form>
            </div>

            <div class="modal-footer bg-slate-200 text-right p-2">
                <button @click="hideModal" type="submit"
                    class="close-btn bg-red-600 px-4 py-2 rounded-lg m-3 text-white font-bold hover:bg-red-700 focus:ring-4 focus:ring-red-400 duration-200">
                    Close
                </button>
            </div>
        </div>
    </div>
    <!-- modal finished -->
</template>

<script>

export default {
    name: "Modal",
    props: {
        isOpen: Boolean
    },
    methods: {
        hideModal() {
            this.$emit('hide')
        }
    }
}

</script>


<style></style>