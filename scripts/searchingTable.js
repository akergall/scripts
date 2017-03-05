/*
 * Moving
 * Authors: Ariel Kergall.
 * Email: ariel.kergall@hotmail.com
 * Project: https://github.com/akergall/scripts
 */

//We have two different functions in two differents tables:



//First, we search for a chain, and if a tr doesn't contain that chain, we hide it.



//we are going to do this search on the #search input

$("#search").on({
	keyup: function(){
		//when the even keyup, is triggered on the input, we receive its value and launch it to the function
		var value = $(this).val();
		search(value);
	}
});

//in secon place, we search for a chain, and if a tr contain that chain, we are going to do add a
// different background color to stand out it over
//the other ones.



//we are going to do this search on the #resaltSearch input

$("#resaltSearch").on({
	keyup: function(){
//when the even keyup, is triggered on the input, we receive its value and launch it to the function
		var value = $(this).val();
		resaltSearch(value);
	}
});


function search(value)
{
	//first, we hide every tr
	$("#searchTable tbody>tr").hide();
	//just if the value is not empty, we continue, but if the value is empty, we must show all the hidden trs...
	if (value!="") 
	{
		//if an element has the searched chain, we show it
		$("#searchTable td:has-txt('"+value+"')").parent("tr").show();
	}
	else
	{
		//if the value is empty, we must show all the hidden trs...
		$("#searchTable tbody>tr").show();
	}
}

function resaltSearch(value)
{
	//first, and for to avoid show wrong information, we remove "here" class from every element
	$("#resaltTable tbody>tr").removeClass("here");
	//if the value is diferent of nothing...
	if(value.trim()!="")
	{
			//we compare the content of the tr (yeah, every td on the tr), with the searched value, and if one 
			//match, we are going to stand out it, with a different background color...
			$("#resaltTable tbody>tr:has-txt('"+value+"')").addClass("here");
	}
}

//this instruction, help us to create a subclass selector
$.extend(($.expr[":"]),
{
	//we create the "has-txt" sub class selector
	
	"has-txt": function(element, index, searched, chain){
		//and ask if the element has de seached chain -we convert all the chain in lower case
	return (element.textContent || element.innerText || $(element).text()||"").toLowerCase().indexOf((searched[3]||"").toLowerCase())>=0
	}
	});

