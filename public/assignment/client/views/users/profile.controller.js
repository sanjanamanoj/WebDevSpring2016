/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($location, UserService)
    {

        var vm = this;

        vm.update = update;
        vm.user = UserService.getCurrentUser();

        function init()
        {
            var currentUser = UserService.getCurrentUser();
            if(currentUser == null)
            {
                $location.url("/home");
            }
        }
        return init();


        function update(user)
        {
            console.log(user);
            var u= UserService.getCurrentUser();
            console.log(user._id);
            UserService.updateUser(u._id,user);
            $location.url("/profile");
        }
    }
})();