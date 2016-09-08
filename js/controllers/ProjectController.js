app.controller('ProjectController', ['$scope', '$routeParams', '$firebaseArray', function($scope, $routeParams, $firebaseArray){
	var index = Number($routeParams.id);
	var ref = firebase.database().ref('Portfolio/');
	$scope.projects = $firebaseArray(ref);
	$scope.projects.$loaded()
		.then(function(){
			key = $scope.projects.$keyAt(index);
			$scope.currentProject = $scope.projects.$getRecord(key);
		});
}]);