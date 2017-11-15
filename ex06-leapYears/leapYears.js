var leapYears = function(year) {

	let isLeapYear = false;

	if(year % 4 === 0)
	{
		isLeapYear = true;
	}

	if(isLeapYear && !(year % 100))
	{
		if(!(year % 400))
		{
			isLeapYear = true;
		}
		else
		{
			isLeapYear = false;
		}
	}

	return isLeapYear;
}

module.exports = leapYears