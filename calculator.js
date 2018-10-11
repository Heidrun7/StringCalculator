function add (number){

	if(number == "") //if no number is in the string
		return 0; //return 0
	if(number.includes(",") || number.includes("\n")) //if there are 2+ numbers seperated by comma/s or new line/s
	{
		var numberArray = number.split(/[\n,]/);

		negError(numberArray); //call function to check if there are negative numbers in string

		return sum(numberArray); //if all the numbers are positive, return their sum
	}
	else //if there is only 1 number in the string, return the number
		return parseInt(number);
}

function sum(numberArray){
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		total += parseInt(numberArray[i]); //get the sum of all the numbers
	}
	return total; //return the sum of all the numbers
}

function negError(numberArray){
	var negativeArray = []; //array to store the negative numbers in the string
	for(var i = 0; i < numberArray.length; i++){
			if(parseInt(numberArray[i]) < 0){
				negativeArray.push(parseInt(numberArray[i])); //push the negative numbers into the negarray
			}
		}
		if(negativeArray.length > 0){ //if there are some elements in the negative array, throw error
			throw new Error("Negatives not allowed: " + negativeArray.toString());
		}
}


module.exports = add;
