"use_strict";

angular.module('TravelApp', ['ngRoute'])
.controller('MainController', [ '$scope' , MainController] )
.controller('PlaceController', [ '$scope', '$routeParams' , PlaceController] )
.controller('PlacesController', [ '$scope', PlacesController] )
.config( AppConfig );

function MainController ($scope) {
	$scope.places = TravelData.places;
}

function PlaceController ($scope, $routeParams) {
	var PlaceTitle = $routeParams.title,
	place = $.grep( TravelData.places , function(e){ return e.title == PlaceTitle; });
	$scope.tPlace = place[0];
}

function PlacesController ($scope) {
	$scope.places = TravelData.places;
}

function AppConfig ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/main.html'
	}).when('/place/:title', {
		templateUrl : 'partials/place.html',
		controller : 'PlaceController'
	}).when('/places', {
		templateUrl : 'partials/places.html',
		controller : 'PlacesController'
	}).otherwise({
		redirectTo	: '/'
	});
}

