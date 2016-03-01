/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController)

    function ProfileController($location, $scope, UserService)
    {
        $scope.error = null;
        $scope.message = null;


        $scope.updateUser = updateUser;

        function updateUser (user) {
            // same validation as register
            $scope.error = null;
            $scope.message = null;

            $scope.currentUser = UserService.updateUser(user);

            if (user)
            {
                $scope.message = "User updated successfully";
                UserService.setCurrentUser($scope.currentUser);
            } else
            {
                $scope.message = "Unable to update the user";
            }
        }
    }
})();