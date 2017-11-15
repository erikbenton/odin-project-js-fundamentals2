var reverseString = function(stringToReverse) {

	let arrayToReverse = stringToReverse.split("");
	let reversedString = "";
	let numberOfChars = arrayToReverse.length;

	for(let i = numberOfChars; i > 0; i--)
	{
		reversedString += arrayToReverse[i-1];
	}

	return reversedString;

}

module.exports = reverseString