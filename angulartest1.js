<!DOCTYPE html>
<html>
<head>
	<meta chrset="UTF 8">
	<link rel="stylesheet" href="css/bootstrap.css"/>
</head>
<body>
<h1> Guru99 Global Event</h1>
<script src="https://code.angularjs.org/1.6.9/angular.js"></script>
<script src="lib/angular.js"></script>
<script src="lib/bootstrap.js"></script>
<script src="lib/jquery-1.11.3.min.js"></script>

<div ng-app="DemoApp" ng-controller="DemoController">

	Tutorial Name : <input type="text" ng-model="tutorialName"><br>

	This tutorial is {{tutorialName}}
</div>
<script>
	var app = angular.module('DemoApp',[]);

	app.controller('DemoController', function($scope){
	$scope.tutorialName = "Angular JS";
	});
</script>

</body>
</html>
