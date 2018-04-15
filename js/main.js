'use strict';
//Fecha actualizada
const numberDay = document.querySelector('.box__number-day');
const writeDay = document.querySelector('.box__write-day');
const yearAndMonth = document.querySelector('.box__year-month');
const days = ["Lunes","Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const newTask = document.querySelector('.new-task');
let currentDay = new Date;
let month = currentDay.getMonth();
let day = currentDay.getDay();
let year = currentDay.getFullYear();

function writeCurrentDate(){
  numberDay.innerHTML = currentDay.getDate();
  writeDay.innerHTML = days[currentDay.getDay()-1];
  yearAndMonth.innerHTML= months[currentDay.getMonth()] + ", " + currentDay.getFullYear();
}

writeCurrentDate();

//Tachar tareas
// const tasks = document.querySelectorAll('.check .chech-text');
// const check = document.querySelector('.check');
// const input = document.querySelector('.input');
// const taskText = document.querySelector('.check-text');
// let checkTask = function(){
//
//   taskText.classList.toggle('done');
//   input.classList.toggle('input-checked');
//
// }
//
// check.addEventListener('click', checkTask);

//Mostrar modal
const modalTask = document.querySelector('.modal');
const inputTask = document.querySelector('.input-task');
const listTask = document.querySelector('.list-task');
const btnAdd = document.querySelector('.button-add');
function showModal(){
  modalTask.classList.remove('hidden');
}

newTask.addEventListener('click', showModal);

//Añadir tareas
function addTask(){
  listTask.innerHTML += '<li class="list-task__item"><input class="check" type="checkbox" name="" value=""><label for="c1" class="check-text"><span class="input"></span>' + inputTask.value + '</label></li>';
  modalTask.classList.add('hidden');
  inputTask.value = '';
}

btnAdd.addEventListener('click', addTask);
