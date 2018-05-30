var firstNo	= document.getElementById("firstNo");
var secondNo = document.getElementById("secondNo");
var addbtn = document.getElementById("add");
var multiplybtn = document.getElementById("multiply");

//Event Listener

addbtn.addEventListener("click", addition);
multiplybtn.addEventListener("click", multiply);
	

function addition(e){
	e.preventDefault();
	var firstNo	= document.getElementById("firstNo").value;
	var secondNo = document.getElementById("secondNo").value;
	var result = +firstNo + +secondNo;
	document.getElementById("result").innerHTML =result;
	document.getElementById("result").className ="result";
}

function multiply(e){
	e.preventDefault();
	var firstNo	= document.getElementById("firstNo").value;
	var secondNo = document.getElementById("secondNo").value;
	var result = +firstNo * +secondNo;
	document.getElementById("result").innerHTML =result;
	document.getElementById("result").className ="result"
}