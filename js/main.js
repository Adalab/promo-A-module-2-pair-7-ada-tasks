'use strict'

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];

const task1 = document.querySelector('.js_task1');

function completedTask(event) {
  event.preventDefault();
  if(task1.complete) {
    task1.innerHTML +=`<li class= "tachado" >
    <input id="${task1.id}" type= "checkbox" checked/>
    </li>`;
  }
}
task1.addEventListener('click', completedTask);