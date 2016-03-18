/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .config(configuration);

    function configuration($routeProvider)
    {
        $routeProvider
            .when("/home",{
                templateUrl:"views/home/home.view.html",
                controller:"HomeController",
                controllerAs: "model"
            })
            .when("/admin",{
                templateUrl:"views/admin/admin.view.html",
                controller:"AdminController",
                controllerAs: "model"
            })
            .when("/register",{
                templateUrl:"views/users/register.view.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/login",{
                templateUrl:"views/users/login.view.html",
                controller: "LoginController",
                controllerAs : "model"
            })
            .when("/profile",{
                templateUrl:"views/users/profile.view.html",
                controller:"ProfileController",
                controllerAs: "model",
                resolve : {checkLoggedIn : checkLoggedIn}
            })
            .when("/forms",{
                templateUrl:"views/forms/forms.view.html",
                controller:"FormController",
                controllerAs: "model"
            })
            .when("/fields",{
                templateUrl:"views/forms/fields.view.html",
                controller:"FieldsController",
                controllerAs:"model"
            })
            .otherwise({
                redirectTo:"/home"
            });

        function checkLoggedIn(UserService, $q, $location) {

            var deferred = $q.defer();

            UserService
                .getCurrentUser()
                .then(function(response) {
                    var currentUser = response.data;
                    if(currentUser) {
                        UserService.setCurrentUser(currentUser);
                        deferred.resolve();
                    } else {
                        deferred.reject();
                        $location.url("/home");
                    }
                });

            return deferred.promise;
    }}
})();
