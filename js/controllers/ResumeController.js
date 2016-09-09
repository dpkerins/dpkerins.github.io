app.controller('ResumeController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = firebase.database().ref('Resume/');
	$scope.resume = $firebaseObject(ref);
}]);