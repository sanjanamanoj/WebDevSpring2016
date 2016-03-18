/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($location, $scope, UserService)
    {

        var vm = this;

        function init() {
            var currentUser = UserService.getCurrentUser();
            if(currentUser == null) {
                $location.url("/home");
            }
        }
        return init();

        $scope.currentUser = UserService.getCurrentUser();
        $scope.update = update;
        function update(user)
        {
             UserService.updateUser(user._id, user,function(response){
             UserService.setCurrentUser(response);
                 console.log(response);

            })


        }
    }
})();