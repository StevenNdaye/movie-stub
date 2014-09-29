var movieStubApp = angular.module('movieStubApp', ['ngRoute', 'ngResource']);

movieStubApp.controller('movieStubController', function($scope, movieStubFactory){
  $scope.movies = movieStubFactory.query();
  $scope.currMovie = null;
  $scope.getMovieById = function(id){
    var movies = $scope.movies;
    for (var i =  0; i < movies.length; i++) {
      var movie = $scope.movies[i];
      if(movie.id == id){
        $scope.currMovie = movie;
      }
    };
  };

  $scope.headerSrc = "tmpl/header.html";
  $scope.back = function(){
    window.history.back();
  };  
  $scope.getCount = function (n){
    return new Array(n);
  };
});

movieStubApp.controller("movieDetailsController", function($scope, $routeParams){
  $scope.getMovieById($routeParams.id);
});

movieStubApp.controller("bookTicketsController", function($scope, $routeParams, $location, $http){
  $scope.getMovieById($routeParams.id);
  $scope.onlyNumbers = /^\d+$/;
  $scope.formData = {};
  $scope.formData.movie_id = $scope.currMovie.id;
  $scope.formData.movie_name = $scope.currMovie.name;
  $scope.formData.date = "Today";

  $scope.processForm = function(){
    $http({
      method: 'POST',
      url: '/book',
      data: $.param($scope.formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).success(function(data){
      console.log(data);
    });
  };

});