/**
 * Created by Sanjanamanoj on 3/11/2016.
 */

"use strict";
(function()
{
    angular
        .module("EventSchedulerApp")
        .controller("SignUpController",SignUpController);

    function SignUpController ($scope, UserService, $location) {
        $scope.signUp = signUp;

        function signUp(user)
        {


                UserService.setCurrentUser(user);
                console.log(user);
                $location.url("/profile");



        }
    }
})();