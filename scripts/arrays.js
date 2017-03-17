var jump = "<br>";
var input = "<input type='text' class='inputForArrayElements' />"

function generateElements(howMany, where)
{
	var elementsToGenerate = howMany;
	for (var i = 0; i < elementsToGenerate; i++) {
		where.append(input+jump);
	}
}

function generateInput(type, id, name. class)
{
	return "<input type>"
}

function ordinal(cardinal)
{
	var lastTwoDigits = cardinal % 100;
	var lastDigit = lastTwoDigits % 10;

	var suffix = "";
	var final = "";
	switch (lastDigit)
	{
		case 1:
		suffix = "st";
		break;

		case 2:
		suffix = "nd";
		break;

		case 3:
		suffix = "rd";
		break;

		default:
		suffix = "th";
		break;
	}

	if (11 <= lastTwoDigits && lastTwoDigits <= 13)
	{
    	suffix = "th";
	}
 	
 	final = cardinal.toString()+suffix;
	
	return final;
}