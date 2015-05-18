(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	$scope.priorityChoices = [
		{display: "High", value: 0},
		{display: "Med", value: 1},
		{display: "Low", value: 3}
	];

	var emptyTask = {};
	$scope.resetButtonEnabled = false;

	$scope.listFromFirebase = $firebaseArray(myFirebaseRef);

	$scope.isTodoExpired = function(todo) {
		var today = new Date();
		var now  = today.getTime();
		if(todo.expiresAtInt <= now){
			todo.isExpired = true;
		}
	};

	
	$scope.addTask = function() {
		var now  = new Date().getTime();
		var sevenDaysFromNow;
		var expirationDays = 7;
		var t = {
			text: $scope.newTodo.text,
			priority: $scope.newTodo.myPriority,
			createdAtInt: now,
			expiresAtInt: now + expirationDays*millisecondsPerDay,
			done: false,
			isExpired: false
		};

		$scope.listFromFirebase.$add(t);
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.newTodo = {};
	};

}]);
},{}]},{},[1]);