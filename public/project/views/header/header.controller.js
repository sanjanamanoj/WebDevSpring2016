/**
 * Created by Sanjanamanoj on 3/4/2016.
 */
(function(){
    angular
        .module("EventSchedulerApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope, $rootScope, $location){
        $scope.aboutStyle=null;
        $scope.logout = logout;
        if($scope.$location.url()=="/about"){
            $scope.aboutStyle =
            {
                "color" : "black"
            }
        }

        function logout(){
            $rootScope.currentUser=null;
            $location.url("/home");
        }
    }
})();