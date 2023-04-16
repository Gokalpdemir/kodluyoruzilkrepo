let ad  = prompt("Adınız nedir","ad giriniz")
document.getElementById("myName").innerText=`${ad}`


function tarih(){
let myClock = document.getElementById("myClock"); 
var now = new Date(); 
var day = now.getDay()
let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
day = gunler[day];
var hour = now.getHours().toString().padStart(2, "0"); 
var minute = now.getMinutes().toString().padStart(2, "0"); 
var second = now.getSeconds().toString().padStart(2, "0"); 
var time = hour + ":" + minute + ":" + second +" "+ day;

myClock.innerHTML = time


}
setInterval(tarih, 1000);