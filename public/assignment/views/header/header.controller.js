/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function() {
  angular
      .module("FormBuilderApp")
      .controller("HeaderController", HeaderController);

  function HeaderController($location, $scope, UserService)
  {
    $scope.$location = $location;
    $scope.logout = logout;

    function logout()
    {
      $location.url("/home");
    }
  }
})();