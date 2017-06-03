angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = function() {
    	return mainService.getUsers();
    };

    $scope.users = $scope.getUsers();
    $scope.toggleFavorite = mainService.toggleFavorite;
   
});