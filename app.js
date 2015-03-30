"use_strict";

angular.module('TravelApp', ['ngRoute'])
.controller('MainController', [ '$scope' , MainController] )
.controller('PlaceController', [ '$scope', '$routeParams' , PlaceController] )
.config( AppConfig );

function MainController ($scope) {
	$scope.places = TravelData.places;
}

function PlaceController ($scope, $routeParams) {
	var PlaceTitle = $routeParams.title,
	place = $.grep( TravelData.places , function(e){ return e.title == PlaceTitle; });
	$scope.tPlace = place[0];
}

function AppConfig ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/main.html'
	}).when('/place/:title', {
		templateUrl : 'partials/place.html',
		controller : 'PlaceController'
	}).otherwise({
		redirectTo	: '/'
	});
}

