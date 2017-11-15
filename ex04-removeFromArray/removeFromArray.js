var removeFromArray = function(firstArray) {

	var args = Array.prototype.slice.call(arguments);

	let initialArray = firstArray;
	let resultingArray = [];

	for(let i = 0; i < initialArray.length; i++)
	{
		for(let j = 1; j < args.length; j++)
		{
			if(initialArray[i] === args[j])
			{
				break;
			}
			if(j === args.length-1)
			{
				resultingArray.push(initialArray[i]);
			}
		}
	}

	return resultingArray;

}

module.exports = removeFromArray