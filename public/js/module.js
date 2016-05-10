'use strict';

var app = angular.module('spApp', ['ui.router', 'stormpath', 'stormpath.templates']);

app.run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'home'
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/login.html' })
    .state('register', { url: '/register', templateUrl: '/html/register.html' })

  $urlRouterProvider.otherwise('/')
});
