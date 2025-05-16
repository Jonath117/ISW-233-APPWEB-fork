import { Command, CommandExecutor, Commands } from "./services/command.js";
import { TodoList } from "./services/todoList.js";

globalThis.DOM = {}; //elemento global entre todos los modulos

function renderList(){
    const todoList = TodoList.getInstance();
    for(const todo of todoList){
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `${todo.text} <button class="delete-btn`;
        DOM.todoList.appendChild(todoItem);
    }   
}

//terminar el delete 
window.addEventListener("DOMContentLoaded", () => {
    DOM.todoInput = document.getElementById("todo-input");
    DOM.addBtn = document.getElementById("add-btn");
    DOM.todoList = document.getElementById("todo-list");


    DOM.addBtn.addEventListener("click", () => {
        //TODO 
        const cmd = new Command(Commands.ADD);
        CommandExecutor.execute(cmd);
    });

    DOM.todoList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            // terminar el delete
        }
    });
    TodoList.getInstance().addObserver(renderList);
});