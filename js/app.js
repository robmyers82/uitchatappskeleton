
/*	ENTER YOUR APP'S JAVASCRIPT CODE HERE!	*/

// this function fires at the ready state, which is when the DOM is
// ready for Javascript to execute
$(document).ready(function() {

	// Initialize Firebase
	// NOTE: you can also copy and paste this information from your project
	//       after you initialize it
	var config = {
		apiKey: "<YOUR FIREBASE API KEY>",
		authDomain: "<YOUR FIREBASE PROJECT>.firebaseapp.com",
		databaseURL: "https://<YOUR FIREBASE PROJECT>.firebaseio.com",
		storageBucket: "<YOUR FIREBASE PROJECT>.appspot.com",
	};
	firebase.initializeApp(config);

	// @NOTE: it's probably a good idea to place your event 
	//		  listeners in here :)
});