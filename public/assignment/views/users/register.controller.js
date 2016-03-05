/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

    function RegisterController($location, $scope, UserService, $rootScope)
    {
        $scope.register = register;

        function register(user)
        {
            UserService.createUser(user, function(response)
            {
                $rootScope.currentUser = response;
                console.log(response);
                $location.url("/profile");
             });
        }
    }
})();
