/**
 * Created by Sanjanamanoj on 3/4/2016.
 */
(function(){
    angular
        .module("EventSchedulerApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope){
        $scope.aboutStyle=null;
        if($scope.$location.url()=="/about"){
            $scope.aboutStyle =
            {
                "color" : "black"
            }
        }
    }
})();