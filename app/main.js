import "modern-css-reset";
// import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.css";
import "phosphor-icons";
import anime from 'animejs/lib/anime.es.js';
import Sortable from 'sortablejs';
import { info } from "autoprefixer";

window.addEventListener("load", () => {
    
    initModalWindowEvents()

    renderTitle()
    eventsTitle()

    renderProgressData()

    filterTasks()
    renderAllTasks()
    
})

console.log(`
Bienvenidx a tu lista de tareas.
Puedes gestionar la lista como quieras: borrar, marcar como terminada, re-ordenarlas, etc.

Haz click en la tarjeta para ver el botón de marcar la tarea como completada. Podrás resetearla como pendiente cuando quieras.

¡También puedes cambiar el título si lo deseas!

`);



/** INICIALIZAR EVENTOS VENTANA */

const initModalWindowEvents = () => {
    const addButton = document.querySelector(".add_task");
    const newTask = document.querySelector(".new_task_container");

    const newTaskForm = newTask.querySelector("form")
    const newTaskInput = newTaskForm.querySelector("input")
    const advertTaskTitle = newTaskForm.querySelector(".advert_new_task")

    //ADD TASK

    addButton.addEventListener("click", (ev) => {
        newTask.classList.remove("hidden");
    })
    newTaskForm.addEventListener("submit", (ev) => {

        ev.preventDefault()

        const taskTitle = newTaskInput.value

        if (taskTitle.length > 0) {
            newTask.classList.add("hidden");
            
            tasks.unshift({
                taskTitle: newTaskInput.value,
                isDone: false
            })

            renderAllTasks()
            renderProgressData()
        } else {
            advertTaskTitle.classList.remove("invisible");
        }

    })
    newTaskForm.addEventListener("reset", (ev) => {
        ev.preventDefault()

        newTaskForm.reset()
        newTask.classList.add("hidden");
    })
}

/* TÍTULO DE LA TAREA */

let title = {
    titleName: "Máster MDI :)",
    isTitleOk: true
}

const renderTitle = () => {
    const newTitle = document.querySelector(".info_list");
    newTitle.innerHTML=`
    <form class="${title.isTitleOk ? "hidden" : "flex"}">
        <input type="text" placeholder="Añadir título">
    </form>
    <div class="title_box ${title.isTitleOk ? "flex" : "hidden"}">
        <h2 class="title_list" role="title">
            ${title.titleName}
        </h2>
        <button class="ph-pencil-fill"></button>
    </div>
    <div class="alert_title invisible">
      <p>El título solo puede tener 25 caracteres.</p>
    </div>
    `
    eventsTitle()
}

const eventsTitle = () => {

    const newTitle = document.querySelector(".info_list");
    const newTitleForm = newTitle.querySelector("form")
    const newTitleInput = newTitleForm.querySelector("input");

    const buttonEdit = newTitle.querySelector("button");
    const advert = newTitle.querySelector(".alert_title")

    newTitleForm.addEventListener("submit", function(ev) {
        ev.preventDefault()
        const titleLenghtOk = (newTitleInput.value).length <= 25;

        if (titleLenghtOk) {
            title.titleName = newTitleInput.value;
            title.isTitleOk = true;
            renderTitle()
        } else { 
            advert.classList.remove("invisible");
        }
    })
    newTitleInput.addEventListener("blur", function(ev) {
        newTitleForm.reset()
    })
    buttonEdit.addEventListener("click", (ev) => {
        title.isTitleOk = false;
        renderTitle()
    })
}


/** ARRAY DE TAREAS */

var taskOk

const tasks = [
    {
        taskTitle: "Practicar con Tailwind el CSS",
        isDone: false
    },
    {
        taskTitle: "Terminar wireframes para Experiencia de Usuario",
        isDone: false
    },
    {
        taskTitle: "Ver los tutoriales nuevos de Carlos profe",
        isDone: false
    },
    {
        taskTitle: "Elegir tema para el TFM",
        isDone: false
    },
    {
        taskTitle: "Hacer la memoria de proyectos",
        isDone: false
    }
]

/** FILTRAR TAREAS */


const filterTasks = () => {

    const infoBox = document.querySelector(".info_box")
    const allButton = infoBox.querySelector(".filter.all")
    const completeButton = infoBox.querySelector(".filter.complete")
    const outstandingButton = infoBox.querySelector(".filter.outstanding")

    allButton.addEventListener("click", (ev) => {
        renderAllTasks()
    })
    completeButton.addEventListener("click", (ev) => {
        renderCompleteTasks()
    })
    outstandingButton.addEventListener("click", (ev) => {
        renderOutstandingTasks()
    })
}

    /** RENDERIZAR TAREAS */

    const renderAllTasks = () => {

        const infoBox = document.querySelector(".info_box")
        const allButton = infoBox.querySelector(".filter.all")

        allButton.focus()

        const allTasksList = document.querySelector(".tasks_list");
        let renderTaskHTML = "";

        for (taskOk of tasks) {
        
            renderTaskHTML+=`
            <article class="task ${taskOk.isDone ? "done" : "undone"}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${taskOk.taskTitle}</p>
                    </div> 
                </div> 
                </div>
                <button class="close_task">
                    <i class="ph-x-circle-fill"></i>          
                </button>

                <button class="reset_task">
                    <i class="ph-arrow-counter-clockwise-fill"></i>
                </button>  
            </article>
            `
        }

        

        allTasksList.innerHTML = renderTaskHTML;

        initTasksEvents()
    }

    const renderCompleteTasks = () => {

        const allTasksList = document.querySelector(".tasks_list");
        let renderTaskHTML = "";

        for (taskOk of tasks) {
        
            renderTaskHTML+=`
            <article class="task ${taskOk.isDone ? "done" : "hidden"}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${taskOk.taskTitle}</p>
                    </div> 
                </div> 
                </div>
                <button class="close_task">
                    <i class="ph-x-circle-fill"></i>          
                </button>

                <button class="reset_task">
                    <i class="ph-arrow-counter-clockwise-fill"></i>
                </button>  
            </article>
            `
        }
        allTasksList.innerHTML = renderTaskHTML;
        initTasksEvents()
    }

    const renderOutstandingTasks = () => {

        const allTasksList = document.querySelector(".tasks_list");
        let renderTaskHTML = "";

        for (taskOk of tasks) {
        
            renderTaskHTML+=`
            <article class="task ${taskOk.isDone ? "hidden" : ""}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${taskOk.taskTitle}</p>
                    </div> 
                </div> 
                </div>
                <button class="close_task">
                    <i class="ph-x-circle-fill"></i>          
                </button>

                <button class="reset_task">
                    <i class="ph-arrow-counter-clockwise-fill"></i>
                </button>  
            </article>
            `
        }
        allTasksList.innerHTML = renderTaskHTML;
        initTasksEvents()
    }

/** INICIALIZAR EVENTOS TAREAS */

const initTasksEvents = () => {

    const allTasks = document.querySelectorAll(".task");

    for (let i = 0; i < allTasks.length; i++) {
        const singleTask = allTasks[i];
        const deleteTask = singleTask.querySelector(".close_task")
        const resetTask = singleTask.querySelector(".reset_task")
        const clickTask = singleTask.querySelector(".task_info")
        const markcomplete = singleTask.querySelector(".complete")

        const deleteTaskPop = document.querySelector(".delete_container");
        const deleteTaskDef = deleteTaskPop.querySelector(".delete");
        const cancelDelete = deleteTaskPop.querySelector(".cancel");

        const label = singleTask.querySelector(".label")

        resetTask.addEventListener("click", () => {
            tasks[i].isDone = false;
            renderAllTasks()
            renderProgressData()
        })


        deleteTask.addEventListener("click", () => {
            confirmOrDeny(i);
        })

        clickTask.addEventListener("click", () => {
            label.classList.toggle("on_click")
        })
        
        markcomplete.addEventListener("click", () => {
            tasks[i].isDone = true;
            renderAllTasks()
            renderProgressData()
        })
    }

    const confirmOrDeny = (i) => {
        const confirmWindow = document.querySelector(".delete_container");
        confirmWindow.classList.add("opened");
        const confirmButton = confirmWindow.querySelector(".delete");
        const cancelButton = confirmWindow.querySelector(".cancel");
        
        confirmButton.onclick = () => {
          tasks.splice(i, 1);
          confirmWindow.classList.remove("opened");
          renderAllTasks();
          renderProgressData()
        };
        cancelButton.onclick = () => {
          confirmWindow.classList.remove("opened");
        };
      };
}

/* REORDENAR TAREAS */

let listToSort = document.getElementById("sortable_list");

new Sortable(listToSort, {
    animation: 150,
    ghostClass: 'blue-background-class',
    delay: 250,
	delayOnTouchOnly: true
});

/** RENDERIZAR DATOS DE LAS TAREAS */

const renderProgressData = () => {
    const dataDone = document.querySelector(".data_done");
    const dataTotal = document.querySelector(".data_total");
    const progressBar = document.querySelector(".progress_done");

    const content = document.querySelector(".content");


    let tasksDoneTotal = 0

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isDone) tasksDoneTotal++;
    }
    
    dataTotal.innerHTML = tasks.length;
    dataDone.innerHTML = tasksDoneTotal;



    let animation = anime({
        targets: [progressBar],
        width: (tasksDoneTotal / tasks.length) * 100 + "%",
        easing: 'easeOutExpo',
        duration: 150,
        
        autoplay: true
      });

    progressBar.style.width = (tasksDoneTotal / tasks.length) * 100 + "%";

    if (tasks.length == 0) {
        content.classList.add("empty");
    } else if (tasks.length > 0) {
        content.classList.remove("empty");
    }
    

}
