var repeatString = function(stringToRepeat, numberOfRepeats) {

	if(numberOfRepeats < 0)
	{
		return "ERROR";
	}

	let finalResult = "";

	for(let i = 0; i < numberOfRepeats; i++)
	{
		finalResult += stringToRepeat;
	}

	return finalResult;

}

module.exports = repeatString