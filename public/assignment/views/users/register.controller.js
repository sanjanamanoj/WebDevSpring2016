/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController)

    function RegisterController($location, $scope, UserService, $rootScope) {
        $scope.message = null;
        $scope.register = register;

        var user = {
            "_id": (newDate).getTime(),
            "firstName": $scope.firstName,
            "lastName": $scope.lastName,
            "username": $scope.username,
            "password": $scope.password,
            "roles": ["student"]
        };
        $scope.register = register;

        function register(user)
        {
            $scope.message = null;
            if (user == null)
            {
                $scope.message = "Please fill in the required fields";
                return;
            }
            if (!user.username)
            {
                $scope.message = "Please provide a username";
                return;
            }
            if (!user.password || !user.password2)
            {
                $scope.message = "Please provide a password";
                return;
            }
            if (user.password != user.password2)
            {
                $scope.message = "Passwords must match";
                return;
            }
            var user = UserService.findUserByUsernameAndPassword(user.username);
            if (user != null)
            {
                $scope.message = "User already exists";
                return;
            }
            var newUser = UserService.createUser($scope.user);
            UserService.createUser(newUser);
            $location.url("/profile");
        }
    }
})();
