app.controller('MainController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = firebase.database().ref('WelcomePage/');
	$scope.welcomePage = $firebaseObject(ref);
}]);