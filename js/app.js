/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

angular.module('AddressBook', [])
	.controller('AddressController', function($scope){
		//initialize employees and order
		$scope.employees = pawneeEmployees;
		$scope.order = 'lastName';

		$scope.sortBy = function(sort) {
			return $scope.order == sort;
		};



});




