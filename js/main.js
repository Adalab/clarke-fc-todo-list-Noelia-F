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
const btnAdd = document.querySelector('.button-add');
const modalTask = document.querySelector('.modal');
const inputTask = document.querySelector('.input-task');
const listTask = document.querySelector('.list-task');

function writeCurrentDate(){
  numberDay.innerHTML = currentDay.getDate();
  writeDay.innerHTML = days[currentDay.getDay()-1];
  yearAndMonth.innerHTML= months[currentDay.getMonth()] + ", " + currentDay.getFullYear();
}

writeCurrentDate();

//Tachar tareas
btnAdd.addEventListener('click', saveTask);

let returnTask = JSON.parse(localStorage.getItem('arrTask'));
if(returnTask){
  getAndShowTasks();
}
else{
  returnTask= [];
}
function ResetTasks(){
  returnTask = [];
  localStorage.setItem('arrTask',JSON.stringify(returnTask));
}

var nombres = document.querySelectorAll('.list-task .li');
//console.log(nombres);
var crossTask = function(element){
  element.addEventListener('click', function(){

    const checked = element.querySelector("input[type='checkbox']:checked");

    if(checked){
      element.classList.add('done');
      element.classList.add('input--checked');
    }
    else{
      element.classList.remove('done');
      element.classList.remove('input--checked');
    }
    updateTaskCheck();
  });
}

//genera el evento de escucha en cada check
for( var i=0; i<nombres.length; i++ ){
  crossTask(nombres[i]);
}

function getAndShowTasks(){
  //comprobamos si hay algun valor en localStorage
  let listTask = '';
  for(var i = 0;i<returnTask.length;i++){
    if(returnTask[i].check == 0){
      listTask += '<li class="list-task__item li"><div class="checkbox-1"><input class="check" type="checkbox" name="" value=""><label for="c1" class="check-text"></label></div><p>'+returnTask[i].name +'</p></li>';
    }
    else{
      listTask += '<li class="list-task__item li"><div class="checkbox-1"><input class="check" type="checkbox" name="" value="" checked><label for="c1" class="check-text"></div><p>'+returnTask[i].name +'</p></li>';
    }
  }

  var tTask = document.querySelector('#list-task');
  tTask.innerHTML  = listTask;
  modalTask.classList.add('hidden');
}

function saveTask(){
  localStorage.setItem('arrTask',JSON.stringify(returnTask));
  returnTask = JSON.parse(localStorage.getItem('arrTask'));
  var taskContainerMenu = document.querySelector('#modal__box-info');
  var newTask = document.querySelector('#input-task');
  var textTask = newTask.value;
  var newAllTask = {'name': textTask, 'check':0};
  console.log(returnTask);
  if(textTask == ''){
    alert('Escribe tu tarea');
  }
  else{
    if(textTask == 'empty')
    {
      ResetTasks();
    }
    else
    {
      returnTask.unshift(newAllTask);
      localStorage.setItem('arrTask',JSON.stringify(returnTask));
    }
    getAndShowTasks();
    taskContainerMenu.style.display = 'none';
    var containerTask = document.querySelector('#list-task');
  }
}

function updateTaskCheck(){
  nombres = document.querySelectorAll('.list-task .li');
  returnTask = [];
  var object = {'name': '', 'check':0};
  var element = '';
  var checked = 0;
  for(var i = 0 ; i < nombres.length; i++ ){

    element = nombres[i];
    checked = element.querySelector("input[type='checkbox']:checked");
    if(checked)
    checked = 1;
    else
    checked = 0;
    object = {'name': element.outerText, 'check': checked}
    returnTask.push(object);
  }
  localStorage.setItem('arrTask',JSON.stringify(returnTask));
}

//Mostrar modal
function showModal(){
  modalTask.classList.remove('hidden');
}

newTask.addEventListener('click', showModal);

//Añadir tareas
// function addTask(){
//   listTask.innerHTML += '<li class="list-task__item"><input class="check" type="checkbox" name="" value=""><label for="c1" class="check-text"><span class="input"></span>' + inputTask.value + '</label></li>';
//   modalTask.classList.add('hidden');
//   inputTask.value = '';
// }
