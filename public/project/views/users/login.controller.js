
"use strict";
(function()
{
    angular
        .module("EventSchedulerApp")
        .controller("LoginController",LoginController);

    function LoginController ($scope, UserService, $location) {
        $scope.login = login;

        function login(user)
        {
            UserService.findUserByEmailAndPassword( user.email, user.password, function(response){

                UserService.setCurrentUser(response);
                console.log(response);
                $location.url("/profile");

            });

        }
    }
})();