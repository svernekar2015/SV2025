<!DOCTYPE html>
<html>
<head>
	<meta chrset="UTF 8">
				<link rel="stylesheet" href="css/bootstrap.css" />
				<title>Angular JS tutorial</title>
</head>
<body>
<h1> This is Angular JS sample test code</h1>
<script src="https://code.angularjs.org/1.6.9/angular.js"></script>
<script src="lib/angular.js"></script>
<script src="lib/bootstrap.js"></script>
<script src="lib/jquery-1.11.3.min.js"></script>

<div ng-app="DemoApp" ng-controller="DemoController">

	Tutorial Name : <input type="text" ng-model="tutorialName"><br>

	This tutorial is {{tutorialName}}
10 + 20 = {{ 10 + 20 }}
				</div>
				<div>added new line for PR test</div>

<script>
	var app = angular.module('DemoApp',[]);

	app.controller('DemoController', function($scope){
	$scope.tutorialName = "Angular JS";
	});
</script>

</body>
</html>
