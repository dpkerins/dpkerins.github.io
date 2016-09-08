app.controller('PortfolioController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = firebase.database().ref('Portfolio/');
	$scope.projects = $firebaseObject(ref);
}]);