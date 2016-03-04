/**
 * Created by Sanjanamanoj on 3/4/2016.
 */
(function(){
    angular
        .module("EventSchedulerApp")
        .controller("MainController",MainController);

    function MainController($scope, $location){
        $scope.$location=$location;
    }
})();