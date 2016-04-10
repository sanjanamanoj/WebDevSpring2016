(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",registerController);

    function registerController($location, UserService,$rootScope) {
        var vm= this;
        vm.message = null;
        vm.register = register;

        function register(user) {
            vm.message = null;
            if (!user) {
                vm.message = "Please fill in the required fields";
                return;
            }
            if (!user.username) {
                vm.message = "Please provide a username";
                return;
            }
            if (!user.password || !user.password2) {
                vm.message = "Please provide Password";
                return;
            }
            if (user.password != user.password2) {
                vm.message = "Passwords must match";
                return;
            }
            if (!user.emails) {
                vm.message = "Please provide an email";
                return;
            }
            var emails = [];
            emails.push(user.emails);
            user.emails=emails;
            UserService
                .register(user)
                //console.log(user)
                .then(function(response){
                    console.log(response.data);
                    if(response.data) {
                        UserService.setCurrentUser(response.data);
                        console.log($rootScope.currentUser);
                        $location.url("/profile");
                    }
                });

        }

    }
})();