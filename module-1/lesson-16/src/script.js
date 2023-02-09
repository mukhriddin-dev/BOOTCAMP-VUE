"use strict";

let exit = document.querySelector("#exit");
let userName = document.querySelector("#user_name");
let token = localStorage.getItem("token");
let mainList = document.querySelector('.list');

// logout

exit.addEventListener("click", () => {
    localStorage.clear();
    logout();
});

function logout() {
    let token = localStorage.getItem("token");
    if (!token) {
        window.location.replace("./login.html");
    }
}



(function () {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("username");
    console.log(user)
    if (!token) {
        window.location.replace("./login.html");
    } else {
        userName.textContent = user;
    }
})();




// list



const listTasks = async () => {
    try {
        const response = await fetch('http://178.62.198.221:3003/task', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        const result = await response.json();
        renderTasklist(result)
    } catch (err) {
        console.log(err)
    }
}




function renderTasklist(tasklist) {
    console.log(tasklist);

    if (tasklist.length) {
        tasklist.forEach((task) => {
            // console.log(task);

            const taskItem = createElement(
                "li",
                "w-full p-3 flex justify-between shadow-lg bg-white rounded-md mb-3 list_item",
                `
              <p class="text-xl text-[#5A5A5A]"> ${task.title}</p>
                <div class="btn-group flex justify-between">

                  <i
                    data-del="${task.id
                }"  class="del bx bx-trash text-2xl text-red-600 active:text-red-800 mx-2 cursor-pointer"
                  ></i>

                  <i
                    data-edit="${task.id
                }" class="edit bx bx-edit text-2xl text-sky-600 active:text-sky-800 mx-2 cursor-pointer"
                  ></i>
                  <i
                   data-check="${task.id
                }" class="check bx bx-check-circle text-2xl ${task.status
                    ? "text-green-600 active:text-green-800"
                    : "text-black active:text-[#3a3a3a]"
                } mx-2 cursor-pointer"
                  ></i>
                </div>
            `
            );

            mainList.append(taskItem);
        });
    } else {
        mainList.innerHTML =
            "<h2 class='text-center text-xl text-red-500'> NOT FOUND !</h2>";
    }
}


console.log(listTasks());