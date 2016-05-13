'use strict';

var app = angular.module("spApp");

app.controller("profileCtrl", function ($scope, $user, userService) {
	

	$user.get()
	.then(user => {
		console.log("user:", user);
		$scope.user = user;
	})
	.catch(err => {
		console.log(err);
	})


	$scope.changeMiddleName = function () {
		//console.log("middlename from changeMiddleName:", $scope.middleName);
		userService.updateMiddleName($scope.middleName, function (data) {
			$scope.user = data;
		})
	}

})