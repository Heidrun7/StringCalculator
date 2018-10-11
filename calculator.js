function add (number){
	if(number == "") //if no number is in the string
		return 0; //return 0
	if(number.includes(",")) //if there are 2+ numbers seperated by comma
	{
		var numberArray = number.split(",");
		return sum(numberArray);
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

module.exports = add;
