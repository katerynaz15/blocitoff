(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);