/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .config(configuration);

    function configuration($routeProvider)
    {
        $routeProvider
            .when("/home",{
                templateUrl:"/views/home/home.view.html"
            })
            .when("/admin",{
                templateUrl:"/views/admin/admin.view.html"
            })
            .when("/register",{
                templateUrl:"/views/users/register.view.html"
            })
            .when("/login",{
                templateUrl:"/views/users/login.view.html"
            })
            .when("/profile",{
                templateUrl:"/views/users/profile.view.html"
            })
            .when("/forms",{
                templateUrl:"/views/forms/forms.view.html"
            })
            .when("/fields",{
                templateUrl:"/views/forms/fields.view.html"
            })
            .otherwise({
                redirectTo:"/home"
            });

    }

})();
