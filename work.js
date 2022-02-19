let count=0;
let min=0;
let sec=0;
let hr=0;
var interval;
function startc(){
    console.log("hi");
    clearInterval(interval);
   interval= setInterval(starttimer, 10);
}

function stopc(){
    clearInterval(interval);
}

function resetc(){
    clearInterval(interval);
    sec="0";
    min="0";
    hr="0";
    count="0";
    document.getElementById("cnt").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
}

function starttimer(){
    count++;
    console.log(count);
    if(count==100){
        count=0;
        sec++;
    }
    if(sec==59){
        count=0;
        sec=0;
        min++;
    }
    if(min==59){
        count=0;
        sec=0;
        min=0;
        hr++;
    }
 
  var secstr=sec;
  var countstr=count;
  var minstr=min;
  var hrstr=hr;

if(count<=9)
countstr="0"+countstr;
if(sec<=9)  
  secstr="0"+ secstr;
if(min<9)
minstr="0"+minstr;
if(hr<9)
hrstr="0"+hrstr;

  
    document.getElementById("cnt").innerHTML=countstr;
    document.getElementById("sec").innerHTML=secstr;
    document.getElementById("min").innerHTML=minstr;
    document.getElementById("hr").innerHTML=hrstr;
}
// document.getElementById("sec").innerHTML=sec;
