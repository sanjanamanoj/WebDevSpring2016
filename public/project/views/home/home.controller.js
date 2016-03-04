/**
 * Created by Sanjanamanoj on 3/4/2016.
 */
(function(){
    angular
        .module("EventSchedulerApp")
        .controller("HomeController",HomeController);

    function HomeController($scope) {
        $scope.event=event;
        function event(){
            $scope.$location.url("/event");
        }
    }
})();