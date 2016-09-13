app.controller('ResumeController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = firebase.database().ref();
	$scope.resume = $firebaseObject(ref.child('Resume'));
}]);