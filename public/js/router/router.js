movieStubApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templareUrl: 'tmpl/home.html',
      controller: 'movieStubController'
    })
    .when('/movie/:id', {
      templareUrl: 'tmpl/movie.html',
      controller: 'movieDetailsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});