var app = angular.module("app", ["firebase"]);

app.controller("TodoCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray){
	//check if there are any cookies, if there are any - console.log - select all cookies and output them
	var myFirebaseRef = new Firebase("https://flickering-torch-7820.firebaseio.com/");

	$scope.listFromFirebase = $firebaseArray(myFirebaseRef);
	$scope.addTask = function() {
		$scope.listFromFirebase.$add({
			text: $scope.todoText
		});
	};
}]);
