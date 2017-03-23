/**
 * Created by amarinas on 3/21/17.
 */
// inject the ngroute dependency in the module
var app = angular.module("app", ["ngRoute"]);
//use the config method to set up routing

//define routes
app.config(function($routeProvider){
    $routeProvider
        .when("/users", {
            templateUrl: "static/partials/customize.html"
        })
        .when("/list", {
            templateUrl: "static/partials/partial1.html"
        })
        .otherwise({
            redirectTo: "/users"
        });
})

app.factory('userFactory',[function(){
    var factory = {};
    //initialize users
    var users = [
        {firstName: "ali", lastName: "blahblha", language: "ruby"}
    ];
    //pass the user list to a controller
    factory.index = function(callback){
        callback(users);
    }

    // add new user to the list
    factory.create = function(user){
        user.push(user);
    }

    //remove the user
    factory.delete = function($index){
        user.splice($index, 1);
    }
    return factory;
}])


app.controller("CustomizeController", ['$scope', 'userFactory', function($scope, userFactory){
    function setUsers(data) {
        $scope.users = data;
        $scope.newUser = {};
    }
    $scope.users = [];

    //when this controller is loaded, fetch the user list
    userFactory.index(setUsers);

    //pass new user info to the factory

    $scope.create = function () {
        userFactory.create($scope.newUser)
        $scope.newUser = {}; //reset form
    }
     //delegate deleting user to the factory
     $scope.delete =function($index){
         userFactory.delete($index);
    }

}])

// inject userfactory into each controller
app.controller('UserController',['$scope', 'userFactory', function($scope, userFactory){
    function setUsers(data){
        $scope.users = data;
    }
    $scope.users = [];

    //when controller is loaded fetch the user list
    userFactory.index(setUsers);
}])
