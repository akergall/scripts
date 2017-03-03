/*
 * Moving
 * Authors: Ariel Kergall.
 * Email: ariel.kergall@hotmail.com
 * Project: https://github.com/akergall/scripts
 */
//we are going to move this just when de document is ready
$(function(){
	//when a moveUp's class element (buttons) is clicked, we trigger the function moveUp()
	$(".moveUp").click(function(){

		//we have to say to the function, the button that has been clicked, so, we pass to the function "this"
		moveUp($(this));

	});

	$(".moveDown").click(function(){

		//we have to say to the function, the button that has been clicked, so, we pass to the function "this"
		moveDown($(this));

	});
})

function moveUp(buttonClicked)
{
	//from the button clicked, we search the nearest tr, that is the 'tr' that we are going to move
	var tr = buttonClicked.closest("tr");
	//we have to say were we want to move the 'tr', in this case, we are goint to move it one position up, 
	//ergo, before of the actual position
	tr.insertBefore(tr.prev());
}

function moveDown(buttonClicked)
{
	//from the button clicked, we search the nearest tr, that is the 'tr' that we are going to move
	var tr = buttonClicked.closest("tr");
	//we have to say were we want to move the 'tr', in this case, we are goint to move it one position down, 
	//ergo, after of the actual position
	tr.insertAfter(tr.next());
}