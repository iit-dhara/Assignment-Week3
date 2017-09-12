var max = function (n1,n2,n3,n4,n5){
	if (isNaN(n1,n2,n3,n4,n5)){
		console.log("Invalid input...");
	}
	else{
		var array1 = [n1,n2,n3,n4,n5];
		array1.sort (function(a,b){
			return b-a
		})
		for (i = 0 ; i <= 2; i++){
			console.log(array1[i]);
		}
	}
}