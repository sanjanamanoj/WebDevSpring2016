/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController (UserService, $location) {
        var vm = this;
        vm.login = login;
        function init()
        {

        }
        init();

        function login(user)
        {
            if(!user)
            {
                return;
            }
            UserService
                .findUserByCredentials({
                    username: user.username,
                    password: user.password
                })
                .then(function(response)
                {
                    if(response.data)
                    {
                        console.log(response.data);
                        UserService.setCurrentUser(response.data);
                        $location.url("/profile");
                    }
                });
        }
    }
})();

