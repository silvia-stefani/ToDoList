import{S as y,a as h}from"./vendor.e5549ce6.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};b();window.addEventListener("load",()=>{L(),f(),p(),u(),S(),d()});console.log(`
Bienvenidx a tu lista de tareas.
Puedes gestionar la lista como quieras: borrar, marcar como terminada, re-ordenarlas, etc.

Haz click en la tarjeta para ver el bot\xF3n de marcar la tarea como completada. Podr\xE1s resetearla como pendiente cuando quieras.

\xA1Tambi\xE9n puedes cambiar el t\xEDtulo si lo deseas!

`);const L=()=>{const n=document.querySelector(".add_task"),o=document.querySelector(".new_task_container"),s=o.querySelector("form"),l=s.querySelector("input"),e=s.querySelector(".advert_new_task");n.addEventListener("click",t=>{o.classList.remove("hidden")}),s.addEventListener("submit",t=>{t.preventDefault(),l.value.length>0?(o.classList.add("hidden"),i.unshift({taskTitle:l.value,isDone:!1}),d(),u()):e.classList.remove("invisible")}),s.addEventListener("reset",t=>{t.preventDefault(),s.reset(),o.classList.add("hidden")})};let a={titleName:"M\xE1ster MDI :)",isTitleOk:!0};const f=()=>{const n=document.querySelector(".info_list");n.innerHTML=`
    <form class="${a.isTitleOk?"hidden":"flex"}">
        <input type="text" placeholder="A\xF1adir t\xEDtulo">
    </form>
    <div class="title_box ${a.isTitleOk?"flex":"hidden"}">
        <h2 class="title_list" role="title">
            ${a.titleName}
        </h2>
        <button class="ph-pencil-fill"></button>
    </div>
    <div class="alert_title invisible">
      <p>El t\xEDtulo solo puede tener 25 caracteres.</p>
    </div>
    `,p()},p=()=>{const n=document.querySelector(".info_list"),o=n.querySelector("form"),s=o.querySelector("input"),l=n.querySelector("button"),e=n.querySelector(".alert_title");o.addEventListener("submit",function(t){t.preventDefault(),s.value.length<=25?(a.titleName=s.value,a.isTitleOk=!0,f()):e.classList.remove("invisible")}),s.addEventListener("blur",function(t){o.reset()}),l.addEventListener("click",t=>{a.isTitleOk=!1,f()})};var c;const i=[{taskTitle:"Practicar con Tailwind el CSS",isDone:!1},{taskTitle:"Terminar wireframes para Experiencia de Usuario",isDone:!1},{taskTitle:"Ver los tutoriales nuevos de Carlos profe",isDone:!1},{taskTitle:"Elegir tema para el TFM",isDone:!1},{taskTitle:"Hacer la memoria de proyectos",isDone:!1}],S=()=>{const n=document.querySelector(".info_box"),o=n.querySelector(".filter.all"),s=n.querySelector(".filter.complete"),l=n.querySelector(".filter.outstanding");o.addEventListener("click",e=>{d()}),s.addEventListener("click",e=>{q()}),l.addEventListener("click",e=>{_()})},d=()=>{document.querySelector(".info_box").querySelector(".filter.all").focus();const s=document.querySelector(".tasks_list");let l="";for(c of i)l+=`
            <article class="task ${c.isDone?"done":"undone"}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${c.taskTitle}</p>
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
            `;s.innerHTML=l,k()},q=()=>{const n=document.querySelector(".tasks_list");let o="";for(c of i)o+=`
            <article class="task ${c.isDone?"done":"hidden"}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${c.taskTitle}</p>
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
            `;n.innerHTML=o,k()},_=()=>{const n=document.querySelector(".tasks_list");let o="";for(c of i)o+=`
            <article class="task ${c.isDone?"hidden":""}">

                <div class="task_info">
                    <div class="label">
                        <button class="complete">
                            <p class="done">Complete</p>
                            <i class="ph-check-circle-fill"></i>
                        </button>
                    </div>
                    <div class="task_title">
                        <i class="ph-check-circle-fill"></i>            
                        <p>${c.taskTitle}</p>
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
            `;n.innerHTML=o,k()},k=()=>{const n=document.querySelectorAll(".task");for(let s=0;s<n.length;s++){const l=n[s],e=l.querySelector(".close_task"),t=l.querySelector(".reset_task"),r=l.querySelector(".task_info"),v=l.querySelector(".complete"),m=document.querySelector(".delete_container");m.querySelector(".delete"),m.querySelector(".cancel");const T=l.querySelector(".label");t.addEventListener("click",()=>{i[s].isDone=!1,d(),u()}),e.addEventListener("click",()=>{o(s)}),r.addEventListener("click",()=>{T.classList.toggle("on_click")}),v.addEventListener("click",()=>{i[s].isDone=!0,d(),u()})}const o=s=>{const l=document.querySelector(".delete_container");l.classList.add("opened");const e=l.querySelector(".delete"),t=l.querySelector(".cancel");e.onclick=()=>{i.splice(s,1),l.classList.remove("opened"),d(),u()},t.onclick=()=>{l.classList.remove("opened")}}};let g=document.getElementById("sortable_list");new y(g,{animation:150,ghostClass:"blue-background-class",delay:250,delayOnTouchOnly:!0});const u=()=>{const n=document.querySelector(".data_done"),o=document.querySelector(".data_total"),s=document.querySelector(".progress_done"),l=document.querySelector(".content");let e=0;for(let t=0;t<i.length;t++)i[t].isDone&&e++;o.innerHTML=i.length,n.innerHTML=e,h({targets:[s],width:e/i.length*100+"%",easing:"easeOutExpo",duration:150,autoplay:!0}),s.style.width=e/i.length*100+"%",i.length==0?l.classList.add("empty"):i.length>0&&l.classList.remove("empty")};
