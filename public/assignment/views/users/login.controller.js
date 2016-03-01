/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController)

    function loginController ($scope, UserService, $location, $rootScope) {
        $scope.login = login;

        function login(user)
        {
            var user = UserService.findUserByCredentials({username: user.username, password: user.password});
            if (user)
            {
                $rootScope.currentUser = user;
                UserService.setCurrentUser(user);
                $location.url("/profile");
            }
        }
    }
})();