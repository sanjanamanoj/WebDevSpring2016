/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function(){
  angular
      .module("FormBuilderApp")
      .controller("HeaderController",HeaderController);

  function HeaderController(UserService,$location){


      var vm = this;
      vm.logout = logout;

    function init()
    {
      vm.$location = $location;
    }
    init();

      function logout()
      {
        UserService
            .logout()
            .then(function(){
              UserService.setCurrentUser(null);
              $location.url("/home");
            });
      }


    }

})();