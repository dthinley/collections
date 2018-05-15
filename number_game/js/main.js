
//variables
var secretNo =  Math.floor((Math.random() * 5) + 1);
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var guesses =document.querySelector('.guessedRight');
var lowOrHi = document.querySelector('.lowOrHi');



//Event Listener and function
btn.addEventListener('click', function(){
	var input = document.getElementById('input').value;
	if(input==secretNo){
		guesses.textContent = 'Congratulations! You got it right!';
		lowOrHi.textContent = '';
	}else if(input>secretNo){
		lowOrHi.textContent = 'Sorry! Too high. Try again..';
	} else{(input<secretNo)
		lowOrHi.textContent = 'Sorry! Too low. Try again..';
	}


});



