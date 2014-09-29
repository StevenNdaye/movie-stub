movieStubApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'tmpl/home.html',
      controller: 'movieStubController'
    })
    .when('/movie/:id', {
      templateUrl: 'tmpl/movie.html',
      controller: 'movieDetailsController'
    })
    .when('/bookTickets/:id',{
      templateUrl: 'tmpl/bookTickets.html',
      controller: 'bookTicketsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});