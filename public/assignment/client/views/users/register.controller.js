/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $scope, UserService, $rootScope) {

        var vm = this;

        vm.register = register;

        function init() {

        }

        init();

        function register(user)
        {
            UserService
                .createUser(user)
                .then(function (response)
                {
                    var currentUser = response.data;
                    if (currentUser != null)
                    {
                        UserService.setCurrentUser(currentUser);
                        $location.url("/profile");
                    }
                });
        }
    }


})();
