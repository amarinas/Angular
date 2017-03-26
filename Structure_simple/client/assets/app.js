/**
 * Created by amarinas on 3/23/17.
 */
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
  $routeProvider
      .when('/new',{
      templateUrl: 'partials/new.html',
          controller: 'newController'

    })
    .when ('/edit/:_id',{
        templateUrl: 'partials/edit.html',
        controller:'editController'
    })

      .otherwise('/new');
});