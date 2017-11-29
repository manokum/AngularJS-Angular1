var app = angular.module("app",[]);

app.controller("MainController",function($scope,$http){
    $http.get("https://dog.ceo/api/breeds/list/all").then(function(res){
        $scope.test = res.data.message;
        $scope.test1 =[];
        for (var key in $scope.test) {
         $scope.test1.push(key);
}
    })

});