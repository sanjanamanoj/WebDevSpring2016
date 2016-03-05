/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function(){
  angular
      .module("FormBuilderApp")
      .controller("HeaderController",HeaderController);

  function HeaderController($scope,$location,$rootScope){
    $scope.logout=logout;

    function logout(){
      $rootScope.currentUser=null;
      $location.url("/home");
    }
  }
})();