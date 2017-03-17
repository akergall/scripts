/*
 * Moving
 * Authors: Ariel Kergall.
 * Email: ariel.kergall@hotmail.com
 * Project: https://github.com/akergall/scripts
 */
//we are going to do this just when an input width the attribute "maxlength" is setted and
// if a key is pressed and released or it recives paste text

$("[maxlength]").on({
	//if the input recives a paste
	paste: function(){
		//we capture the element
		var elementToCunt = $(this);
		//and send the element to the chacacterCounter function
		characterCounter(elementToCunt);
	},
	//if key is pressed and released
	keyup: function()
	{
		//we capture the element
		var elementToCunt = $(this);
		//and send the element to the chacacterCounter function
		characterCounter(elementToCunt);
	}
});





function characterCounter(elementToCunt)
{
		//we recieve the element
		var toCunt = elementToCunt;
		//we get the maxlength setted for the element
		var stringMaxCharacters = toCunt.attr("maxlength");
		//we convert that value (maxlength) to int
		var	max = parseInt(stringMaxCharacters);
		//we stablish the current number of characters
		var currentCharacters =toCunt.val().length;
		//we stablich the remaining nunber of characters
		var remainingCharacters	= max - currentCharacters;	

		//now we set the element that is going to receive values
		//first, we set the "small" that contains the values receptors
		var forCounter = toCunt.next("small");
		//then we set our currentCharacter receiver
		var forCurrent = forCounter.find(".currentCharacters");
		//and our remainingCharacter receiver
		var forRemaining = forCounter.find(".charactersRemaining");

		//then, we put our currentCharacter value on the currentCharacter receiever
		forCurrent.html(currentCharacters);
		//and we put our remainingCharacter value on the charactersRemaining receiver
		forRemaining.html(remainingCharacters);

	}

/*
	if we want to change the color of the span according the value of the current or remaining character number
	we just have to add an if before put the value in the receiver

	example:

	if(currentCharacters>=50)
	{
		forCouter.css("color", red);
	}
	else
	{
		forCouter.css("color", green);
	}
	*/


//input propertychange:  the previous function, capture the control changes, but this, is going to capture all events of the input value, any input value change
$("[data-maxlength]").bind("input propertychange",
	function(e) {
		var elementToCunt = $(this);

		characterCounterTwo(elementToCunt);
	})

//We are going to use almost the same logic of the first counter
function characterCounterTwo(elementToCunt) {
	var toCount = elementToCunt;
	var stringMaxCharacters = toCount.attr("data-maxlength");
	
	var max = parseInt(stringMaxCharacters);

	var span = toCount.next("small").find("span");
	var currentText = toCount.val();
	var currentCharacters = currentText.length;
	var remainingCharacters = max - currentCharacters;

	var forCounter = toCount.next("small");
		//then we set our currentCharacter receiver
		var forCurrent = forCounter.find(".currentCharacters");
		//and our remainingCharacter receiver
		var forRemaining = forCounter.find(".charactersRemaining");

		
		
		if (currentCharacters < max) {
    	//we can add here some color
    	if (remainingCharacters <= 50) {
    		span.css("color", "red");
    	} else {
    		span.css("color", "gray");
    	}

    	toCount.val(currentText);
    	forCurrent.html(currentCharacters);
    	forRemaining.html(remainingCharacters);
    } else {
    	span.css("color", "red");
    	toCount.val(currentText.substring(0, max-1));
        //if there aren't more remaining characters, we say "Hey, you cant add more text"
        forCurrent.html("You cant add more text, ");
        forRemaining.html(remainingCharacters);
    }
    
    
}



