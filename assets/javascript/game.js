
$(document).ready(function()
{

//global variable declarations
var targetScore = 0;
var rand = Math.floor((Math.random() * 50) + 1);
var randValue = [1,2,5,10];

console.log(rand);

$("#targetScore").append(rand);
$("#totalScore").append(" "+targetScore);





});//-------------------------------end of jquery code