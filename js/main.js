function askQuestions() {

	// name

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + " " + lastName;

	/* This line of code is just to check your code in console - doesn't need to go live */
	console.log('User is: ' + fullName);

	$('h2').text('Hello ' + fullName);

	/*
		Challenge: If the user's first name is 'General' and their last name is NOT 'Assembly', then greet the general!
		(Hint: Use an alert() and a console.log())

		PS - Test with anybody, And General Assembly, General Somebodyelse
	*/

	if (firstName === 'General' && lastName !== 'Assembly') {
		
		console.log('User is a General but not an Assembly.');
		alert ('Hi General!');

	}

	var favColour = prompt('What is your favourite colour?').toLowerCase();

	if (favColour === 'red' ||
		favColour === 'blue' ||
		favColour === 'green' ||
		favColour === 'yellow') {

		$('h2').css('color', favColour);
	}

	/* 
		
		Answer:

		if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {

		console.log('User is a General but not an Assembly.');
		alert ('Hi General!');
	} */


	// age

	var age = prompt ('How old are you?');

	age = parseInt(age);

	if (age >= 18) {
		
		console.log('User is an adult.');
		alert ('Hello, adult!');
	}

	else if (age >= 13) {
		
		console.log('User is a teenager.');
		alert ('Come back in a few years!');
	}

	else {
		
		console.log('User is a child');
		alert('Go away, child!');
	}

}


// When the page has loaded

$(document).on('ready',function() {

	// when the user clicks the image run askQuestions;
	$('img').on('click' , askQuestions);


	// hide all the things
	$('h3').next().hide();

	// when a user clicks on an h3
	$('h3').on('click', function() {

		// Hide the next element
		// $(this).next().hide();

		// Toggle the next element
		// $(this).next().toggle();

		// Slide Toggle the next element
		$(this).next().slideToggle(150);


	});

});
