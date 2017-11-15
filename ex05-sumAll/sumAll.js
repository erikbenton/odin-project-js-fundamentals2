var sumAll = function(startingNum, endingNum) {

	if(typeof startingNum !== "number" || typeof endingNum !== "number")
	{
		return "ERROR";
	}

	if(startingNum < 0 || endingNum < 0)
	{
		return "ERROR";
	}

	let sum = 0;

	//If endingNum is less than startingNum
	//Swap them and keep on going
	if(endingNum < startingNum)
	{
		let temp = endingNum;
		endingNum = startingNum;
		startingNum = temp;
	}

	for(let i = startingNum; i < endingNum + 1; i++)
	{
		sum += i;
	}

	return sum;

}

module.exports = sumAll