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

const task1 = document.querySelector('js_task1');
const task2 = document.querySelector('js_task2');
const task3 = document.querySelector('js_task3');
const task4 = document.querySelector('js_task4');
const inputCheck1 = document.querySelector('js_checkbox1');



function completedTask(event) {

  if (tasks[0].completed === true) {
    task1.innerHTML += `<li class= "tachado" >
    <input id="${task1.id}" type="checkbox" checked/>
    </li>`;
  } else {
    task1.innerHTML += `i class="js_task1">
    <input class="js_checkbox1" type="checkbox" name="task1" id="task1" />
  </li>`
  };
}
inputCheck1.addEventListener('click', completedTask);