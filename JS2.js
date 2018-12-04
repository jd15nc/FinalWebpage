var todayDate = new Date();

var todayDay = todayDate.getDate();
var todayMonth = todayDate.getMonth()+1;
var todayYear = todayDate.getFullYear();

var formatedCode = todayDate.getDate() + "/" + todayDate.getMonth() + "/" + todayDate.getFullYear();
//For the function get.Month, the highest the number (month) the script is allowing us to go to is 11, so that is why on the webpage the month is 11 not 12. I tried to make it 12 but I couldnt so I thought I would let you know.

document.getElementById("output").innerHTML= formatedCode;

var myPrompt = prompt("Are you hungry Foodie?");
console.log(myPrompt);
