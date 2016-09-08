app.controller('AdminController', ['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', '$compile', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray, $compile){
	var ref = firebase.database().ref();
	var firebaseProjects = firebase.database().ref('projects');

	var authRef = $firebaseAuth();

	$scope.auth = authRef;
	$scope.auth.$onAuthStateChanged(function(authData) {
	  $scope.authData = authData;
	});

	$scope.authorize_password = function(){
		var email = angular.element(document.querySelector('.email-input')).val();
		var password = angular.element(document.querySelector('.password-input')).val();
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	};

	$scope.logOut = function(){
		firebase.auth().signOut().then(function() {
			console.log("SIGNED OUT")
		  // Sign-out successful.
		}, function(error) {
			console.log(error);
		  // An error happened.
		});
	};

	$scope.obj = $firebaseObject(ref);
	var list = $firebaseArray(ref.child('Portfolio'));

	$scope.saveNewData = function() {
		var newProjectName = angular.element(document.querySelector('.new-name')).val();
		var newImage = angular.element(document.querySelector('.new-image')).val();
		var newClient = angular.element(document.querySelector('.new-client')).val();
		var newShortSummary = angular.element(document.querySelector('.new-short-summary')).val();
		var newLongSummary = angular.element(document.querySelector('.new-long-summary')).val();
		var newProjectObject = {
			'Client' : newClient,
			'ImageSource' : newClient,
			'Long_Summary' : newLongSummary,
			'Name' : newProjectName,
			'Short_Summary' : newShortSummary
		};
		list.$add(newProjectObject);
		newProjectName, newImage, newClient, newShortSummary, newLongSummary = "";
	};


































}]);