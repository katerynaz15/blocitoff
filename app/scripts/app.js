var app = angular.module("app", ["firebase", "ui.router"]);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
	// .state({url: "/", controller: "TodoCtrl"})
		.state('active', {
		url: '/active',
		templateUrl: '/templates/active.html',
		controller: 'TodoCtrl'
	});

	$stateProvider
		.state('history', {
		url: '/history',
		templateUrl: '/templates/history.html',
		controller: 'TodoCtrl',
	});

}]);


app.controller('active.controller', [
	"$log",
	"$scope",
	function($log, $scope) {
		$log.debug("In the active.controller");
	}
]);

app.controller('history.controller', ["$scope", function($scope) {console.log("history.controller");}]);

app.controller("TodoCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray){
	var myFirebaseRef = new Firebase("https://flickering-torch-7820.firebaseio.com/");

	var emptyTask = {};
	$scope.resetButtonEnabled = false;

	$scope.listFromFirebase = $firebaseArray(myFirebaseRef);
	$scope.addTask = function() {
		var t = {
			text: $scope.newTodo.text,
			priority: $scope.newTodo.myPriority,
			createdAtInt: new Date(2010, 6, 26).getTime() / 1000,
			done: false
		};
		$scope.listFromFirebase.$add(t);
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.newTodo = {};
	};

}]);