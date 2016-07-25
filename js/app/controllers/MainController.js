function MainController($scope){
  $scope.name = "Vinv";
  $scope.email = "vinvasir@fakemail.com";
  $scope.phone = "555-555-5555";
}

var app = angular.module('app');

app.controller('MainController', MainController);