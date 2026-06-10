const title=document.getElementById("title");
const button=document.getElementById("chamgeBtn");

button.addEventListner("click",function(){
	 title.textContent="Button Clicked!";
	 title.style.color="red";
});

