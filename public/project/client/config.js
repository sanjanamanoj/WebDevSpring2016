(function(){
    angular
        .module("EventSchedulerApp")
        .config(configuration);

    function configuration($routeProvider, $httpProvider){
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html"


            })
            .when("/about",{
                templateUrl: "views/about/about.view.html",
                resolve:{
                    loggedin:checkCurrentUser
                }
            })
            .when("/event",{
                templateUrl: "views/createEvent/event.view.html",
                controller: "EventController",
                controllerAs: "model",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/timeProposal",{
                templateUrl: "views/createEvent/timeProposal.view.html",
                controller: "TimeController",
                controllerAs:"model",
                resolve:{
                    loggedin:checkCurrentUser
                }
            })
            .when("/settings",{
                templateUrl: "views/createEvent/settings.view.html",
                controller:"SettingsController",
                controllerAs:"model",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/login",{
                templateUrl: "views/users/login.view.html",
                controller : "LoginController",
                controllerAs: "model"
            })
            .when("/dateProposal",{
                templateUrl: "views/createEvent/dateProposal.view.html",
                controller: "DateController",
                controllerAs: "app",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/invite",{
                templateUrl: "views/createEvent/invite.view.html",
                controller: "InviteController",
                controllerAs: "model",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/pollCreated",{
                templateUrl: "views/createEvent/pollCreated.view.html",
                controller:"PollCreatedController",
                controllerAs:"model",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/event/:eventId/poll", {
                templateUrl: "views/poll/poll.view.html",
                controller:"PollController",
                controllerAs: "model",
                resolve:{
                    loggedin:checkCurrentUser

                }
            })
            .when("/profile",{
                templateUrl: "views/users/profile.view.html",
                controller:"ProfileController",
                controllerAs: "model",
                resolve:{
                    loggedin:checkLoggedin

                }
            })
            .when("/myEvents",{
                templateUrl: "views/myEvents/myEvents.view.html",
                controller: "MyEventsController",
                controllerAs: "model",
                resolve:{
                    loggedin:checkLoggedin

                }
            })
            .when("/signUp",{
                templateUrl: "views/users/signUp.view.html",
                controller: "SignUpController",
                controllerAs: "model"
            })
            .when("/event/details/:eventId", {
                templateUrl: "views/myEvents/myEventDetails.view.html",
                controller: "DetailsController",
                controllerAs: "model"
            })


            .otherwise({
                redirectTo: "/home"
            })
            }

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/project/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
            // User is Not Authenticated
            else
            {
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                $location.url('/login');
            }
        });

        return deferred.promise;
    };


    var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/project/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0' && user.roles.indexOf('admin') != -1)
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
        });

        return deferred.promise;
    };


    var checkCurrentUser = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/project/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
            }
            deferred.resolve();
        });

        return deferred.promise;
    };

})();