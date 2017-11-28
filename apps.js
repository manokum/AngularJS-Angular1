var app = angular.module("app",[]);

app.controller("MainController",function($scope,$http){
    $http.get("https://dog.ceo/api/breeds/list/all").then(function(res){
        $scope.test = res.data;
    })

});