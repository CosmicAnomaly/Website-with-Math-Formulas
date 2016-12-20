"use strict"
//The line below this indicates that all the code inside the code block is to initiate/load on the page loading. 
$(document).ready(function() {
	//Variables for all functions and fields are declared here.
	var basicMathOne, basicMathTwo, result, averageResult, averageOne, averageTwo, averageThree, averageFour, averageFive;
	var averageSix, averageSeven, averageEight, averageNine, averageTen;
	var squareSide, rectangleSideA, rectangleSideB, paraBase, paraHeight, trapBaseA, trapBaseB, trapHeight, circleRadius, ellipseAxisA, ellipseAxisB, triangleBase, triangleHeight;
	var squareAnswer, rectangleAnswer, paraAnswer, trapAnswer, circleAnswer, ellipseAnswer, triangleAnswer;
	//Set the values for the basic math page.
	function setValues()
	{
		basicMathOne = Number(document.getElementById("basicMathOne").value);
		basicMathTwo = Number(document.getElementById("basicMathTwo").value);
	}
	//Set the values for the Averages area of the basic math page. 
	function setAverageValues()
	{
		averageOne = Number(document.getElementById("averageOne").value);
		averageTwo = Number(document.getElementById("averageTwo").value);
		averageThree = Number(document.getElementById("averageThree").value);
		averageFour = Number(document.getElementById("averageFour").value);
		averageFive = Number(document.getElementById("averageFive").value);
		averageSix = Number(document.getElementById("averageSix").value);
		averageSeven = Number(document.getElementById("averageSeven").value);
		averageEight = Number(document.getElementById("averageEight").value);
		averageNine = Number(document.getElementById("averageNine").value);
		averageTen = Number(document.getElementById("averageTen").value);
	}
	//Set the values for the Area page. 
	function setAreaValues()
	{
		squareSide = Number(document.getElementById("squareSide").value);
		rectangleSideA = Number(document.getElementById("rectangleSideA").value);
		rectangleSideB = Number(document.getElementById("rectangleSideB").value);
		paraBase = Number(document.getElementById("paraBase").value);
		paraHeight = Number(document.getElementById("paraHeight").value);
		trapBaseA = Number(document.getElementById("trapBaseA").value);
		trapBaseB = Number(document.getElementById("trapBaseB").value);
		trapHeight = Number(document.getElementById("trapHeight").value);
		circleRadius = Number(document.getElementById("circleRadius").value);
		ellipseAxisA = Number(document.getElementById("ellipseAxisA").value);
		ellipseAxisB = Number(document.getElementById("ellipseAxisB").value);
		triangleBase = Number(document.getElementById("triangleBase").value);
		triangleHeight = Number(document.getElementById("triangleHeight").value);		
	}
	//On click event to find the Sum. 
	$("#sum").click(function() {
		setValues();
		result = basicMathOne+basicMathTwo;
		alert("The sum is: "+result);		
	});
	//On click event to find the Remainder. 
	$("#subtract").click(function() {
		setValues();
		result = basicMathOne-basicMathTwo;
		alert("The remainder is: "+result);		
	});
	//On click event to find the Product. 
	$("#multiply").click(function() {
		setValues();
		result = basicMathOne*basicMathTwo;
		alert("The product is: "+result);		
	});
	//On click event to find the Quotient.
	$("#divide").click(function() {
		setValues();
		result = basicMathOne/basicMathTwo;
		alert("The quotient is: "+result);		
	});
	//On click event to find the Average of all numbers inside the form.
	$("#average").click(function() {
		setAverageValues();
		averageResult = ((averageOne+averageTwo+averageThree+averageFour+averageFive+averageSix+averageSeven+averageEight+averageNine+averageTen)/10)
		alert(averageResult);
	});
	//On click event to find the Area of a Square.
	$("#squareArea").click(function() {
		setAreaValues();
		squareAnswer = squareSide*squareSide;
		alert("The area of your Square is: "+squareAnswer);		
	});
	//On click event to find the Area of a Rectangle.
	$("#rectangleArea").click(function() {
		setAreaValues();
		rectangleAnswer = rectangleSideA*rectangleSideB;
		alert("The area of your Rectangle is: "+rectangleAnswer);		
	});
	//On click event to find the Area of a Parallelogram.
	$("#paraArea").click(function() {
		setAreaValues();
		paraAnswer = paraBase*paraHeight;
		alert("The area of your Parallelohram is: "+paraAnswer);		
	});
	//On click event to find the Area of a Trapezoid.
	$("#trapArea").click(function() {
		setAreaValues();
		trapAnswer = ((trapBaseA+trapBaseB)/2) * trapHeight;
		alert("The area of your Trapezoid is: "+trapAnswer);		
	});
	//On click event to find the Area of a Circle.
	$("#circleArea").click(function() {
		setAreaValues();
		circleAnswer = (circleRadius*circleRadius) * 3.14;
		alert("The area of your Circle is: "+circleAnswer);		
	});
	//On click event to find the Area of an Ellipse.
	$("#ellipseArea").click(function() {
		setAreaValues();
		ellipseAnswer = (ellipseAxisA*ellipseAxisB) * 3.14;
		alert("The area of your Ellipse is: "+ellipseAnswer);		
	});
	//On click event to find the Area of a Triangle.
	$("#triangleArea").click(function() {
		setAreaValues();
		triangleAnswer = ((triangleBase*triangleHeight)/2);
		alert("The area of your Triangle is: "+triangleAnswer);		
	});
});
