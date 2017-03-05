/*
 * Moving
 * Authors: Ariel Kergall.
 * Email: ariel.kergall@hotmail.com
 * Project: https://github.com/akergall/scripts
 */


//for move from left to right, or from right to left
//moving and deleting an element
//we receive the option selected
function moveToLeft(selectedOption)
{
	//then we say option is going to be added to the second select
	selectedOption.appendTo("#selectOne");
}
function moveToRight(selectedOption)
{
	selectedOption.appendTo("#selectTwo");
}

//to keep the option in the select
function moveToLeftk(selectedOption)
{
	//for this, we need to make a clone of the selected option, and then, that clone
	//is what we append to the second option
	selectedOption = selectedOption.clone();
	selectedOption.appendTo("#selectOne");
	
}

function moveToRightk(selectedOption)
{
		selectedOption = selectedOption.clone();
		selectedOption.appendTo("#selectTwo");
	
}
//for move all options, we select all options of the select and then we append them to the
//second select so we say, each option, in selectToClone (#selectOne in this case)  append it to
//the second select, but wait a moment, the first element of the list (-select an option-) must no be appended
function moveToRightAll() {
	//we select the select to "copy"
	var selectToClone = $("#selectOne");
	//and then, we passe it to the second select, but we say hey, don't copy the first option!
	$("option", selectToClone).not(":first").each(function(){
		$(this).appendTo("#selectTwo");
	});
}

function moveToLeftAll() {
	var selectToClone = $("#selectTwo");
	$("option", selectToClone).not(":first").each(function(){
		$(this).appendTo("#selectOne");
	});
	 
}



//multiple select
//
//for multiple select, we are going to use the same functions!!!
function moveToLeftMultiple(selectedOption)
{
	
	selectedOption.appendTo("#selectOneMultiple");
	
}

function moveToRightMultiple(selectedOption)
{

		selectedOption.appendTo("#selectTwoMultiple");
	
}
function moveToLeftkMultiple(selectedOption)
{
	selectedOption = selectedOption.clone();
	selectedOption.appendTo("#selectOneMultiple");
	
}

function moveToRightkMultiple(selectedOption)
{
		selectedOption = selectedOption.clone();
		selectedOption.appendTo("#selectTwoMultiple");
	
}
function moveToRightAllMultiple() {
	var selectToClone = $("#selectOneMultiple");
	$("option", selectToClone).not(":first").each(function(){
		if($("#selectTwoMultiple", selectToClone).length==0)
		{
			$(this).appendTo("#selectTwoMultiple");
		}
	});
}

function moveToLeftAllMultiple() {
	var selectToClone = $("#selectTwoMultiple");
	$("option", selectToClone).not(":first").each(function(){
		$(this).appendTo("#selectOneMultiple");
	});
	 
}

