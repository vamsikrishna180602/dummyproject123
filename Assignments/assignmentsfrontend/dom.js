var Box=document.getElementById("box");
let sw1= document.createElement("button");
let sw2= document.createElement("button");
sw1.innerText="ON";
sw2.innerText="OFF";
let fragment=document.createDocumentFragment();
fragment.appendChild(sw1);
fragment.appendChild(sw2);
Box.appendChild(fragment);
sw1.style.height="80px";
sw2.style.height="80px";
sw2.style.margin="20px";
sw1.style.marginTop="350px";
sw1.style.marginLeft="100px";
sw1.style.padding="8px";
var onSwbtn;
var offSwbtn;

sw1.addEventListener("click", function(){
onSwbtn = window.prompt("Enter bg color");
Box.style.backgroundColor = onSwitchbtn;
});

sw2.addEventListener("click", function(){
Box.style.backgroundColor = "white";
});