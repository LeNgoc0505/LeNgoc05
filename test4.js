  
  var day;
  var time=new Date().getHours();   //khai bao bien time 
    if(time<8){    //neu time <8 thi in ra good morning
      day="good morning";
    }
    else if (time<11){        //neu time <11 thi dung va in ra kq la good afernoon
      day='good afternoon';
    }
    else{        
            day='good evening'
    }
    console.log(day);

    var hom;

    //su dung switch case
switch (new Date().getDay()) {
  case 0:
    hom = "Sunday";
    break;
  case 1:
    hom = "Monday";
    break;
  case 2:
    hom = "Tuesday";
    break;
  case 3:
    hom = "Wednesday";
    break;
  case 4:
    hom = "Thursday";
    break;
  case 5:
    hom = "Friday";
    break;
  case  6:
    hom = "Saturday";
}
console.log("hom nay la thu:"+hom);


switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);


switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
console.log(text);

//
var laptop=["Dell","HP","Ause","Ap","Thinkpad"]
var tx="";
var i;
for(i=0; i<laptop.length;i++){
  tx+= laptop[i] +"\n";
}
console.log(tx);

for (i = 0, len = laptop.length, text = ""; i < len; i++) {
  tx += laptop[i] + "\n";
}
console.log(tx);


var tt="";
var i;
for (i = 0; i < 5; i++) {
  tt += "The number is " + i + "\n";
}
console.log(tt);

var i = 4;  //khai bao bien i=4;
var len = laptop.length;   //khai bao bien len  = do dai mang cua laptop
var text = "";    
for (; i < len; i++) {
  text += laptop[i] + "\n";
}
console.log(text);

//vong lap while
var wi="";
var i=0;
while(i<5){
wi+="Cac so nho hon 5 la:"+i +"\n";
i++;
}
console.log(wi);
//do while
var wie="";
var i=0
do{
  wie+="Cac so nho hon 10 la:"+i+"\n";
  i++;
}
while (i<=10);
console.log(wie);
//vong lap for break
var ty="";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) { break; }
  ty += "The number is " + i + "\n";
}
console.log(ty);

//vong lap for continue
var xi="";
var i;
for(i=0;i<10;i++){
  if(i===8){continue}
  xi+="So la:"+i+"\n"
}
console.log(xi);
//Bitwise
var x = 7 & 1;  //khai báo bien x  toan tu and
console.log(x);

var y = 9 | 1;   //khai bao bien y toan tu hoac
console.log(y);

var z= 6 ^2;
console.log(z);
var c=~7;
console.log(c);

var b=-9>>2;
console.log(b);

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}


var str = "Ngay mai toi phai di hoc ca ngay";
var n = str.search("phai");
var txt=str.replace("di hoc","di hop")
console.log("Vi tri cua chu phai la:"+n);
console.log("Thây doi chu thanh la:"+txt);

//
var name="Ngoc";
cb();
function cb(){
console.log("Ten toi la:"+name);
}
var t="Anh";

function cn(){  //khai bao bien nam trong ham
 var t="Anh";
}
console.log("ten toi la:"+t);
  

"use strict";
var v= "\010"; //loi 
console.log(v);

var c=10;{
  let c=2;
}
console.log(c);

let u = 8;
 for (let u = 0; u < 10; u++) {}
  console.log(u);



 
