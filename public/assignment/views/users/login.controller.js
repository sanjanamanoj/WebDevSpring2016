/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController ($scope, UserService, $location) {
        $scope.login = login;

        function login(user)
        {
             UserService.findUserByUsernameAndPassword( user.username, user.password,function(response){

                    UserService.setCurrentUser(response);
                    console.log(response)
                    $location.url("/profile");

            });

        }
    }
})();