'use strict';
const days = ["Lunes","Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const numberDay = document.querySelector('.box__number-day');
const writeDay = document.querySelector('.box__write-day');
const yearAndMonth = document.querySelector('.box__year-month');
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
//
// // currentDay = new Date();
// // day = currentDay.getDate();
// // month = currentDay.getMonth();
// // year = currentDay.getFullYear().toString();
// //
// // if (day<10){
// //   day= 0 + day;
// // }
// //
// // console.log(month);
//
// let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//
// function diaSemana() {
//   var x = document.getElementById("fecha");
//   let date = new Date(x.value.replace(/-+/g, '/'));
//
//   var fechaNum = date.getDate();
//   var mes_name = date.getMonth();
//
//
//   console.log(dias[date.getDay()-1] + " " + fechaNum + " de " + meses[mes_name] + " de " + date.getFullYear());
