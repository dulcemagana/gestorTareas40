import { renderTask } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    // Hacemos visible la lista de tareas
    renderTask();

    // Agregar el evento la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input");
        if(taskInput.value !== "") {
            // Agregamos la tarea
            addTask(taskInput.value);

            // Volvemos a Cargar la lista de tareas
            renderTask();

            // limpiar el input
            document.getElementById("task-imput").value = "";
        }
    });

});