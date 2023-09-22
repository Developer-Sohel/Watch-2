var miliSce = document.getElementById('mili-sc');
var Sce = document.getElementById('scn');
var mins = document.getElementById('min');
var hours = document.getElementById('hours');
var dates = document.getElementById('date');



setInterval(function(){
    
var date = new Date();
var mils = date.getMilliseconds();
var scn = date.getSeconds ();
var min = date.getMinutes ();
var hour = date.getHours ();
var dat = date.getUTCFullYear ();

miliSce.innerText = mils;
Sce.innerText = scn;
mins.innerText = min;
hours.innerText = hour;
dates.innerText = dat;



},0)