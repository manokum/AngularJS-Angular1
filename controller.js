//Controllers :
/**
 * 1 . What are controllers in Angular JS 
 * 2 . Difference between scope and $scope in Angular 
 * 3 . 
 * 
 */
app.controller("MainController",function($scope,$http,GetBreds){
 $scope.init = function(){
    $scope.getDogsBred();
}
$scope.getDogsBred = function(){
    GetBreds.getMeAllBreds()
    .then(function(res){
        $scope.test1 = res.message;
    },function(err){

    })
}
$scope.init();

})