/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location,UserService, $rootScope) {

        var vm = this;

        vm.register = register;

        function init() {

        }

        init();

        function register(user)
        {
           console.log(user);
           // UserService.setCurrentUser(user)
            UserService
                .createUser(user)
                .then(function (response)
                {
                   var users = response.data;
                    console.log(users);
                    //console.log(users);
                    for(var u in users) {
                        if (users[u].username == user.username) {
                            UserService.setCurrentUser(users[u]);
                            $location.url("/profile");
                        }
                    }
                });
        }
    }


})();
