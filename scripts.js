"use strict";
let counter = 0;
document.getElementById("counterValue").innerText = counter;
document.getElementById("addCounter").addEventListener("click", () => {
	++counter;
	document.getElementById("counterValue").innerText = counter;
});
document.getElementById("subtractCounter").addEventListener("click", () => {
	--counter;
	document.getElementById("counterValue").innerText = counter;
});
function hello(){
	alert('"Hello there!');
}
window.location.onload(alert('Hey TEJ!'));
