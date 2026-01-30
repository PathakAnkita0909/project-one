let listContainer = document.getElementById("list_container");
let inputBox = document.getElementById("input_box");
let addbtn = document.getElementById("add")
var editvalue = null;
// function addTask() {

// let inputValue = inputBox.value.trim(); // Trim to remove any extra whitespace

// if (inputValue === '') {
//     alert("You must write something");
// } else {

//     let li = document.createElement("li");
//     li.innerHTML = inputValue;
//     listContainer.appendChild(li);
//     let span = document.createElement("span")
//     span.innerHTML = "\u00d7";
//     li.appendChild(span)
// }
// inputBox.value = "";
// saveData();
// }

// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();

//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }

// }, false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);

// }
// function showData() {
//     listContainer.innerHTML = localStorage.getItem("data");

// }
// showData();
let addTask = () => {
    const inputValue = inputBox.value.trim();

    if (inputValue === '') {
        alert("You must write something");
        return false;
    }

    if (addbtn.value == "edit") {
        const pTag = editvalue.target.parentElement.querySelector("p");
        pTag.textContent = inputValue;
        addbtn.value = "add"
        inputBox.value = ""
        editvalue = null;
        return;

    }
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = inputValue;
    li.appendChild(p);

    let del = document.createElement("span")
    del.innerHTML = "\u00d7";
    li.appendChild(del)
    let edit = document.createElement("span")
    edit.classList.add("edit")
    edit.innerHTML = "Edit"
    li.appendChild(edit)
    listContainer.appendChild(li);

    inputBox.value = "";
    saveLOcalTodo(inputValue)
}
let updateList = (e) => {
    if (e.target.innerHTML == "\u00d7") {
        listContainer.removeChild(e.target.parentElement)
    }
    if (e.target.innerHTML === "Edit") {
        const pTag = e.target.parentElement.querySelector("p");
        inputBox.value = pTag.textContent;
        inputBox.focus();
        addbtn.value = "edit"
        editvalue = e;

    }
}
const saveLOcalTodo = (todo) => {
    let todos = []
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

}
listContainer.addEventListener('click', updateList)
