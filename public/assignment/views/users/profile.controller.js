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