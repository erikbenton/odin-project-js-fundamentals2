var ftoc = function(fahrenheitTemp) {

	let celsiusTemp = (fahrenheitTemp - 32) * 5.0/9.0;

	return roundToTenths(celsiusTemp);
  
}

var ctof = function(celsiusTemp) {

	let fahrenheitTemp = (celsiusTemp * 9.0/5.0) + 32;

	return roundToTenths(fahrenheitTemp);
  
}

function roundToTenths(numberToRound)
{
	return Math.round(numberToRound * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}