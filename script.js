let Tasks = [] //tableau de taches

const btnclick = document.getElementById('button')
const input = document.getElementById("AddTask");

btnclick.addEventListener('click', function click() {

    const newTask = document.getElementById('AddTask').value;
    Tasks.push(newTask);
    const list = document.getElementById('toDoList');
    list.innerHTML = '';

    Tasks.forEach((task, index) => {
        let btnSupp = `<button class="btnSupp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="${index}" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>`
        list.insertAdjacentHTML("beforeend", `<li id="${index}">${task} ${btnSupp}</li>`)

        let buttons_Supp = document.querySelectorAll(".btnSupp");
        buttons_Supp.forEach((button, index) => {
            button.addEventListener('click', function (e) {
                console.log(`${index}`)
                // console.log(this)
            })
        });

        addToLocalStorage();
    })
}) //add avec click





input.addEventListener("keyup", function (eve) {
    if (eve.key === 'Enter') {
        eve.preventDefault();
        btnclick.click();
    }
}); //add avec touche entree


let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);  //permet de check


function addToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let data = localStorage.getItem("tasks");
if (data) {
    tasks = JSON.parse(data);
}
;
