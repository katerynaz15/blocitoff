(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module("app", ["firebase", "ui.router"]);

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
},{}]},{},[1]);