var button=document.querySelector(`.button`)
var wheel = document.querySelector(`.wheel`)
let number = Math.round(Math.random() * 1000);

button.addEventListener('click',()=>{
    wheel.style.transform = "rotate(" + number + "deg)";
	number += Math.round(Math.random() * 1000);
})