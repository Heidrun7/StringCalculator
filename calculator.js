function add (numbers){

	if(numbers == "") //if no number is in the string
		return 0; //return 0

	if(numbers.startsWith("//")){

		numbers = changeDelimeter(numbers); //change numbers to a string with delimeter changed to comma and delimeter definition cut off
	}

	if(numbers.includes(",") || numbers.includes("\n")) //if there are 2+ numbers seperated by comma/s or new line/s
	{
		var numberArray = numbers.split(/[\n,]/);

		negError(numberArray); //call function to check if there are negative numbers in string

		gt1000(numberArray); //call function to ignore numbers greater than 1000

		return sum(numberArray); //if all the numbers are positive, return their sum
	}
	else //if there is only 1 number in the string, return the number
		return parseInt(numbers);
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

function gt1000(numberArray){
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) > 1000){ //if the element is larger than 1000
			numberArray.splice(i, 1); //remove 1 element at position i
		}
	}
}

function changeDelimeter(numbers){
		var delimeter; //the new delimeter
		var newlpos = numbers.indexOf("\n"); //get the position of \n in string
		delimeter = numbers.slice(2,newlpos); //get the delimeter
		var strlength = numbers.length; //get the length of the string
		numbers = numbers.slice((newlpos+1), strlength); //cut //[delimeter]\n off the string
		var num = numbers.replace(new RegExp(delimeter, "g"), ","); //replace all instances of new delimeter with comma
		return num; //return the updated string
}

module.exports = add;
