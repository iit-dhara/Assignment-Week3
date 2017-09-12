var fizzbuzz = function (num1,num2){
	if(isNaN(num1,num2)){
		console.log("Please enter numbers..");
	}
	else{
		if(num1 < num2){
			for (i = num1; i < num2; i++){
				if((i % 3 === 0) && (i % 5 === 0)){
					console.log(i + " is FizzBuzz");
				}
				else if(i % 5 === 0){
					console.log(i + " is Buzz");
				}
				else if(i % 3 === 0){
					console.log(i + " is Fizz");
				}
				else{
					console.log(i + " is not satisfied any conditions");
				}
			}	
		}
		else if(num1 > num2) {
			console.log(num1 + " is greater than "+ num2 + ", Please enter smaller number first..");
		}
	}
}