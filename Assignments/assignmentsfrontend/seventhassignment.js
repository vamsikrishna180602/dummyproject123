var num1=40;
var num2=30;
var num3=10;
if(num1>num2 && num1>num3){
console.log("Num1 is greater");
}
else if(num2>num1 && num2>num3){
console.log("NUm2 is greater");
}
else{
console.log("Num3 is greater");
}
//While loop
var i=1;
while(i<=5){
console.log("While loop iteration"+ " " +i);
i++;
}
//For loop
for(var i=1;i<=5;i++){
console.log("For loop iteration"+ " "+i);
}
//Do-while loop
var i=1;
do{
console.log("Do-while loop iteration"+" "+i);
i++;
}while(i<=5);
//Condition
var arr=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for(var i=0;i<arr.length;i++){
if(arr[i]=="Mon"){
console.log("It's Monday");
}
break;
}