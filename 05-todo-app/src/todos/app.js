import html from "./app.html?raw"
import todoStore, { Filters } from "../store/todo.store"
import { renderTodos, renderPendingTodos } from "./use-cases"


const ElementIds = {
    ClearCompleted: ".clear-completed",
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
    todoFilters: ".filtro",
    PendingCountLabel: "#pending-count"
}
/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) =>{

    const diplayTodos = () =>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter())
        renderTodos(ElementIds.TodoList, todos)
        updatePendignCount()
    }

    const  updatePendignCount = () => {
        renderPendingTodos(ElementIds.PendingCountLabel)
    }
    // Cuando la función app se llama
    (() =>{
        const app = document.createElement("div")
        app.innerHTML = html

        document.querySelector(elementId).append(app)
        diplayTodos()
    })()

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput)
    const todoListUl = document.querySelector(ElementIds.TodoList)
    const clearCompletedBtn = document.querySelector(ElementIds.ClearCompleted)
    const filtersLi = document.querySelectorAll(ElementIds.todoFilters)

    // Listeners
    newDescriptionInput.addEventListener("keyup", (event) =>{
        if (event.keyCode !== 13) return
        if (event.target.value.trim().length === 0) return
        todoStore.addTodo(event.target.value)
        diplayTodos()
        event.target.value = ""
    })

    todoListUl.addEventListener("click", (event) =>{
        const element = event.target.closest("[data-id]")
        todoStore.toggleTodo(element.getAttribute("data-id"))
        diplayTodos()
    })

    todoListUl.addEventListener("click", (event) =>{
        const isDestroyElement = event.target.className === "destroy"
        const element = event.target.closest("[data-id]")
        if (!element || !isDestroyElement) return

        todoStore.deleteTodo(element.getAttribute("data-id"))
        diplayTodos()
    })

    clearCompletedBtn.addEventListener("click", () =>{
        todoStore.deleteCompleted()
        diplayTodos()
    })

    filtersLi.forEach(element => {
        element.addEventListener("click", (event) =>{
            filtersLi.forEach(el => {
                el.classList.remove("selected")
            })
            event.target.classList.add("selected")

            switch (event.target.text) {
                case "Todos":
                    todoStore.setFilter(Filters.All)
                    break;

                case "Pendientes":
                    todoStore.setFilter(Filters.Pending)
                    break;
                case "Completados":
                     todoStore.setFilter(Filters.Completed)
                    break;
                default:
                    break;
            }

            diplayTodos()
        })
    })
}