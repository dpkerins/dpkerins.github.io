// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkLgYm_g1UN-3z__g5V52B2Du2TRqqdJU",
  authDomain: "personalsites-80989.firebaseapp.com",
  databaseURL: "https://personalsites-80989.firebaseio.com",
  storageBucket: "personalsites-80989.appspot.com",
};
firebase.initializeApp(config);


var app = angular.module('PortfolioApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
    .when('/resume', {
      templateUrl: 'views/resume.html',
      controller: 'ResumeController'
  	})
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioController'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/aboutme', {
      templateUrl: 'views/aboutme.html',
      controller: 'AboutMeController'
    })
    .when('/menu', {
      templateUrl: 'views/menu.html',
      controller: 'MenuController'
    })
    .when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'AdminController'
    })
    .when('/:id', {
      templateUrl: 'views/project.html',
      controller: 'ProjectController'
    })
    .otherwise({
      redirectTo: '/'
    })
});



